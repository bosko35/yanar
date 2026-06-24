import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaChevronRight, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sanityClient, isSanityConfigured } from '../lib/sanityClient';

// Fallback Mock Data
const mockPetitions = [
    {
        _id: "1",
        title: 'Anlaşmalı Boşanma Protokolü Örneği',
        excerpt: 'Tarafların karşılıklı anlaştığı hususları içeren, mahkemeye sunulmaya hazır örnek taslak.',
        category: 'Aile Hukuku',
        publishedAt: '2024-04-10',
        slug: { current: 'anlasmali-bosanma-protokolu' }
    },
    {
        _id: "2",
        title: 'Kira Tespit Davası Dilekçesi',
        excerpt: '5 yılı dolduran kira sözleşmelerinde kiranın rayiç bedele yükseltilmesi talebiyle açılan dava dilekçesi.',
        category: 'Gayrimenkul Hukuku',
        publishedAt: '2024-03-20',
        slug: { current: 'kira-tespit-davasi-dilekcesi' }
    },
    {
        _id: "3",
        title: 'İşe İade Davası Dava Dilekçesi',
        excerpt: 'Haksız fesih durumunda arabuluculuk sonrası iş mahkemesine sunulacak dilekçe örneği.',
        category: 'İş Hukuku',
        publishedAt: '2024-02-15',
        slug: { current: 'ise-iade-davasi-dilekcesi' }
    }
];

const categories = [
    'Tümü',
    'Aile Hukuku',
    'Gayrimenkul Hukuku',
    'İş Hukuku',
    'İcra ve İflas Hukuku',
    'Tüketici Hukuku',
    'Diğer'
];

const PetitionsPage = () => {
    const [petitions, setPetitions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPetitions = async () => {
            try {
                if (isSanityConfigured()) {
                    const query = `*[_type == "petition"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            excerpt,
            "category": categories[0]->title,
            publishedAt
          }`;
                    const sanityData = await sanityClient.fetch(query);
                    setPetitions(sanityData);
                } else {
                    setPetitions(mockPetitions);
                }
            } catch (error) {
                console.error("Dilekçeler çekilirken bir hata oluştu:", error);
                setPetitions(mockPetitions);
            } finally {
                setLoading(false);
            }
        };

        fetchPetitions();
    }, []);

    const filteredPetitions = petitions.filter((petition) => {
        const categoryMatch = selectedCategory === 'Tümü' || petition.category === selectedCategory;
        const searchMatch = petition.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            petition.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Örnek <span className="text-secondary">Dilekçeler</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Hukuki süreçlerinizde kılavuzluk yapması amacıyla hazırlanan dilekçe örneklerini inceleyip indirebilirsiniz.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-secondary rounded-full"></div>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-primary/5 rounded-sm border border-secondary/20 p-6 mb-8">
                            <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-secondary/20 pb-2">Kategoriler</h3>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <button
                                            className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between ${selectedCategory === category
                                                    ? 'text-secondary font-bold'
                                                    : 'text-gray-800 hover:text-secondary'
                                                }`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                            {selectedCategory === category && <FaChevronRight className="text-xs" />}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 rounded-sm border border-secondary/20 p-6">
                            <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-secondary/20 pb-2">Dilekçe Ara</h3>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Kelime giriniz..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-secondary/30 rounded-sm focus:outline-none focus:border-secondary text-sm transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Petitions List */}
                    <div className="lg:w-3/4">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                            </div>
                        ) : filteredPetitions.length === 0 ? (
                            <div className="bg-primary/5 rounded-sm border border-secondary/20 p-8 text-center">
                                <p className="text-gray-600 text-lg">Üzgünüz, aramanızla eşleşen dilekçe bulunamadı.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                {filteredPetitions.map((petition, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={petition._id}
                                        className="bg-white group border border-secondary/20 rounded-sm hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 p-6"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

                                            <div className="flex-1 flex items-start space-x-4">
                                                <div className="bg-primary/10 p-4 rounded-sm border border-secondary/20 mt-1">
                                                    <FaFileAlt className="text-2xl text-secondary" />
                                                </div>

                                                <div>
                                                    {petition.category && (
                                                        <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                                                            {petition.category}
                                                        </span>
                                                    )}
                                                    <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                                        {petition.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm line-clamp-2 pr-4 lg:pr-12">
                                                        {petition.excerpt}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-secondary/20">
                                                <Link
                                                    to={`/dilekce/${petition.slug.current}`}
                                                    className="w-full sm:w-auto inline-flex justify-center items-center bg-secondary text-primary px-6 py-3 rounded-sm text-sm font-bold hover:bg-[#cbb66a] transition-colors"
                                                >
                                                    <FaDownload className="mr-2" /> İncele & İndir
                                                </Link>
                                            </div>

                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        <div className="mt-12 bg-primary/5 border border-secondary/20 p-6 rounded-sm">
                            <p className="text-xs text-gray-500 italic">
                                * Uyarı: Sitemizde yer alan dilekçe örnekleri bilgilendirme ve kılavuz mahiyetinde olup, her somut olayın özelliklerine göre alanında uzman bir avukat aracılığıyla özel olarak düzenlenmeleri tavsiye edilmektedir. Hatalı veya eksik kullanım sebebiyle doğabilecek hukuki kayıplardan büromuz sorumlu tutulamaz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetitionsPage;
