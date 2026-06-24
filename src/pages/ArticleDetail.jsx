import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserAlt, FaArrowLeft } from 'react-icons/fa';
import { PortableText } from '@portabletext/react';
import { sanityClient, isSanityConfigured, urlFor } from '../lib/sanityClient';

// Fallback Mock Data
const mockArticle = {
    _id: "1",
    title: 'Anlaşmalı Boşanma Nedir? Nasıl Yapılır?',
    content: [
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'Anlaşmalı boşanma, eşlerin evliliklerinin sona erdirilmesi konusunda anlaşmaya varması durumunda başvurulan boşanma yöntemidir. Türk Medeni Kanunu madde 166/3 uyarınca evlilik en az 1 yıl sürmüş ise eşlerin birlikte başvurması gerekir.' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'Anlaşmalı boşanmanın en büyük avantajı, çekişmeli boşanmaya göre sürecin çok daha kısa sürmesidir. Genellikle tek bir celsede boşanma kararı verilebilmektedir.' }]
        }
    ],
    category: 'Aile Hukuku',
    author: 'Yanar Hukuk',
    publishedAt: '2024-04-12',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
};

const components = {
    types: {
        image: ({ value }) => (
            <img
                src={urlFor(value).url()}
                alt={value.alt || 'Makale Görseli'}
                className="my-8 rounded-sm shadow-md max-w-full"
            />
        ),
    },
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-serif font-bold text-primary mt-8 mb-4">{children}</h3>,
        normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 italic text-gray-600 bg-primary/5">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-2">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-8 mb-6 text-gray-700 space-y-2">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ children, value }) => (
            <a href={value.href} className="text-secondary hover:underline" target="_blank" rel="noreferrer">
                {children}
            </a>
        ),
    },
};

const ArticleDetail = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                if (isSanityConfigured()) {
                    const query = `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            "imageUrl": mainImage.asset->url,
            "author": author->name,
            "category": categories[0]->title,
            publishedAt,
            content
          }`;
                    const sanityData = await sanityClient.fetch(query, { slug });
                    setArticle(sanityData);
                } else {
                    // Mock modda fetch simülasyonu
                    setTimeout(() => {
                        setArticle({ ...mockArticle, title: mockArticle.title + ` (${slug.replace(/-/g, ' ')})` });
                        setLoading(false);
                    }, 500);
                    return;
                }
            } catch (error) {
                console.error("Makale detayı çekilirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Makale Bulunamadı</h2>
                <Link to="/makaleler" className="text-secondary hover:underline font-bold flex items-center">
                    <FaArrowLeft className="mr-2" /> Makalelere Dön
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/makaleler" className="inline-flex items-center text-secondary hover:text-primary transition-colors font-bold mb-8 uppercase text-sm tracking-wider">
                        <FaArrowLeft className="mr-2" /> Tüm Makaleler
                    </Link>

                    {article.category && (
                        <div className="uppercase tracking-wider text-xs font-bold text-secondary mb-4">
                            {article.category}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center text-sm text-gray-500 mb-10 pb-10 border-b border-secondary/20 space-x-6">
                        <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-secondary" />
                            <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR')}</span>
                        </div>
                        {article.author && (
                            <div className="flex items-center">
                                <FaUserAlt className="mr-2 text-secondary" />
                                <span>{article.author}</span>
                            </div>
                        )}
                    </div>

                    <div className="mb-12 rounded-sm overflow-hidden shadow-xl border border-secondary/10 bg-primary/5 flex items-center justify-center min-h-[200px]">
                        <img
                            src={article.imageUrl || "/logoyanar.png"}
                            alt={article.title}
                            className={`w-full max-h-[500px] ${article.imageUrl ? 'object-cover' : 'object-contain max-h-[200px] opacity-70 p-8'}`}
                        />
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-800 font-sans">
                        <PortableText
                            value={article.content}
                            components={components}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ArticleDetail;
