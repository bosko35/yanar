import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';

const Appointment = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-primary text-white pt-32 pb-20 px-6 relative">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl font-serif text-secondary mb-4">Randevu Talep Formu</h1>
                        <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Hukuki danışmanlık hizmeti almak için aşağıdaki formu doldurarak randevu talebinizi bize iletebilirsiniz.
                            Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Info Sidebar */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-sm shadow-lg border-t-4 border-secondary">
                                <h3 className="text-xl font-serif text-primary mb-4">İletişim</h3>
                                <div className="space-y-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-secondary" />
                                        <span>0539 399 99 55</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCalendarAlt className="text-secondary" />
                                        <span>Hafta İçi: 09:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary p-6 rounded-sm shadow-lg text-white">
                                <h3 className="text-xl font-serif mb-4">Acil Durumlar</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Mesai saatleri dışında acil hukuki destek ihtiyacınız olursa bize ulaşabilirsiniz.
                                </p>
                                <a href="tel:+905393999955" className="block text-center bg-accent py-2 rounded font-bold hover:bg-red-700 transition-colors">
                                    ACİL ARAMA
                                </a>
                            </div>
                        </div>

                        {/* Appointment Form */}
                        <div className="md:col-span-2 bg-white p-8 rounded-sm shadow-xl">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Adınız Soyadınız *</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Telefon Numaranız *</label>
                                        <input type="tel" className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" required />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">E-posta Adresi</label>
                                        <input type="email" className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Konu *</label>
                                        <select className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                                            <option>Genel Danışmanlık</option>
                                            <option>Ceza Hukuku</option>
                                            <option>Aile Hukuku (Boşanma vb.)</option>
                                            <option>Ticaret Hukuku</option>
                                            <option>Gayrimenkul Hukuku</option>
                                            <option>Diğer</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Mesajınız / Hukuki Sorununuz</label>
                                    <textarea rows="4" className="w-full p-3 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-secondary text-white font-bold py-4 rounded hover:bg-[#8e715b] transition-colors tracking-widest uppercase">
                                    Randevu Talebi Gönder
                                </button>

                                <p className="text-xs text-center text-gray-500 mt-4">
                                    * Gönderdiğiniz bilgiler Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında gizli tutulacaktır.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
