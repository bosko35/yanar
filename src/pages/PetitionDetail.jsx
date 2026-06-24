import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaFileAlt } from 'react-icons/fa';
import { PortableText } from '@portabletext/react';
import { sanityClient, isSanityConfigured } from '../lib/sanityClient';

// Fallback Mock Data
const mockPetition = {
    _id: "1",
    title: 'Anlaşmalı Boşanma Protokolü Örneği',
    content: [
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'PROTOKOL' }],
            style: 'h2'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'TARAFLAR:' }],
            style: 'h3'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '1- [Eş 1 Adı Soyadı] (T.C. No: ...)' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '2- [Eş 2 Adı Soyadı] (T.C. No: ...)' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'KONU: Tarafların karşılıklı anlaşarak evlilik birliğini sona erdirmesi...' }]
        }
    ],
    category: 'Aile Hukuku',
    publishedAt: '2024-04-10',
};

const components = {
    block: {
        h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4 text-center">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-serif font-bold text-primary mt-8 mb-4">{children}</h3>,
        normal: ({ children }) => <p className="text-gray-800 leading-loose mb-4">{children}</p>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-8 mb-6 text-gray-800 space-y-2">{children}</ul>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
    },
};

const PetitionDetail = () => {
    const { slug } = useParams();
    const [petition, setPetition] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPetition = async () => {
            try {
                if (isSanityConfigured()) {
                    const query = `*[_type == "petition" && slug.current == $slug][0] {
            _id,
            title,
            "category": categories[0]->title,
            "fileUrl": fileAsset.asset->url,
            publishedAt,
            content
          }`;
                    const sanityData = await sanityClient.fetch(query, { slug });
                    setPetition(sanityData);
                } else {
                    setTimeout(() => {
                        setPetition({ ...mockPetition, title: mockPetition.title + ` (${slug.replace(/-/g, ' ')})` });
                        setLoading(false);
                    }, 500);
                    return;
                }
            } catch (error) {
                console.error("Dilekçe detayı çekilirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPetition();
    }, [slug]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
            </div>
        );
    }

    if (!petition) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Dilekçe Bulunamadı</h2>
                <Link to="/dilekceler" className="text-secondary hover:underline font-bold flex items-center">
                    <FaArrowLeft className="mr-2" /> Dilekçelere Dön
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 print:pt-0 print:pb-0">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="print:hidden flex justify-between items-center mb-8 border-b border-secondary/20 pb-6">
                        <Link to="/dilekceler" className="inline-flex items-center text-secondary hover:text-primary transition-colors font-bold uppercase text-sm tracking-wider">
                            <FaArrowLeft className="mr-2" /> Dilekçeler Listesi
                        </Link>

                        <div className="flex space-x-4">
                            <button
                                onClick={handlePrint}
                                className="bg-primary/5 text-primary border border-secondary/20 px-6 py-2 rounded-sm text-sm font-bold hover:bg-primary/10 transition-colors uppercase"
                            >
                                Yazdır
                            </button>
                            {petition.fileUrl && (
                                <a
                                    href={`${petition.fileUrl}?dl=`}
                                    className="bg-secondary text-primary px-6 py-2 rounded-sm text-sm font-bold hover:bg-[#cbb66a] transition-colors flex items-center uppercase"
                                >
                                    <FaDownload className="mr-2" /> Word Olarak İndir
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="bg-white print:shadow-none shadow-2xl rounded-sm p-8 md:p-14 border border-secondary/30 relative print:border-none print:p-0">
                        {petition.category && (
                            <div className="print:hidden absolute top-0 right-0 bg-secondary text-primary text-xs font-bold px-4 py-1 uppercase tracking-wider rounded-bl-sm">
                                {petition.category}
                            </div>
                        )}

                        <div className="mb-12 text-center">
                            <FaFileAlt className="text-5xl text-secondary mx-auto mb-6 opacity-30 print:hidden" />
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 leading-tight uppercase">
                                {petition.title}
                            </h1>
                        </div>

                        <div className="prose max-w-none text-gray-800 font-serif leading-loose text-justify text-sm md:text-base">
                            <PortableText
                                value={petition.content}
                                components={components}
                            />
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-200">
                            <div className="flex justify-end pr-10">
                                <div className="text-center w-48">
                                    <p className="font-bold mb-10 text-primary">İmza</p>
                                    <p className="border-b border-gray-400"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default PetitionDetail;
