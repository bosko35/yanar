import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUserAlt, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sanityClient, isSanityConfigured, urlFor } from '../lib/sanityClient';

// Fallback Mock Data
const mockArticles = [
  {
    _id: "1",
    title: 'Anlaşmalı Boşanma Nedir? Nasıl Yapılır?',
    excerpt: 'Anlaşmalı boşanma, eşlerin evliliklerinin sona erdirilmesi konusunda anlaşmaya varması durumunda başvurulan boşanma yöntemidir...',
    category: 'Aile Hukuku',
    author: 'Yanar Hukuk',
    publishedAt: '2024-04-12',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
    slug: { current: 'anlasmali-bosanma-nedir' }
  },
  {
    _id: "2",
    title: 'Kira Artış Oranı Usulleri ve Kiracı Hakları',
    excerpt: 'Kiracı ve ev sahipleri arasında en çok yaşanan uyuşmazlıklardan biri kira artış oranıdır. Yasal sınırlar nelerdir?',
    category: 'Gayrimenkul Hukuku',
    author: 'Yanar Hukuk',
    publishedAt: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    slug: { current: 'kira-artis-orani' }
  },
  {
    _id: "3",
    title: 'İşe İade Davası Hakkında Bilinmesi Gerekenler',
    excerpt: 'Haksız olarak işten çıkartıldığınızı düşünüyorsanız işe iade davası açabilirsiniz. Dava süreci nasıl işler?',
    category: 'İş Hukuku',
    author: 'Yanar Hukuk',
    publishedAt: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80',
    slug: { current: 'ise-iade-davasi' }
  }
];

const categories = [
  'Tümü',
  'Aile Hukuku',
  'Ceza Hukuku',
  'Gayrimenkul Hukuku',
  'İş Hukuku',
  'Ticaret Hukuku',
  'İcra ve İflas Hukuku'
];

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (isSanityConfigured()) {
          const query = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            excerpt,
            "imageUrl": mainImage.asset->url,
            "author": author->name,
            "category": categories[0]->title,
            publishedAt
          }`;
          const sanityData = await sanityClient.fetch(query);
          setArticles(sanityData);
        } else {
          setArticles(mockArticles);
        }
      } catch (error) {
        console.error("Makaleler çekilirken bir hata oluştu:", error);
        setArticles(mockArticles); // Hata anında mock göster
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const categoryMatch = selectedCategory === 'Tümü' || article.category === selectedCategory;
    const searchMatch = article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
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
            Hukuki <span className="text-secondary">Makaleler</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hukuki konularda en güncel bilgileri, yargıtay kararlarını ve uzman görüşlerimizi inceleyebilirsiniz.
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
              <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-secondary/20 pb-2">Makale Ara</h3>
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

          {/* Articles Grid */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="bg-primary/5 rounded-sm border border-secondary/20 p-8 text-center">
                <p className="text-gray-600 text-lg">Üzgünüz, aramanızla eşleşen makale bulunamadı.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={article._id}
                    className="bg-white group cursor-pointer border border-secondary/20 rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden bg-primary/5 flex items-center justify-center">
                      <img
                        src={article.imageUrl || "/logoyanar.png"}
                        alt={article.title}
                        className={`w-full h-full ${article.imageUrl ? 'object-cover' : 'object-contain p-8 opacity-70'} group-hover:scale-110 transition-transform duration-700`}
                      />
                      {article.category && (
                        <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-lg">
                          {article.category}
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1.5 text-secondary" />
                          <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR')}</span>
                        </div>
                        {article.author && (
                          <div className="flex items-center">
                            <FaUserAlt className="mr-1.5 text-secondary" />
                            <span>{article.author}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-6 text-sm flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>

                      <Link
                        to={`/makale/${article.slug.current}`}
                        className="mt-auto inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors"
                      >
                        Devamını Oku <FaChevronRight className="ml-2 text-xs" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;