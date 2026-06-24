import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-primary text-white pt-32 pb-20 px-6 relative">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl font-serif text-secondary mb-4">İletişim</h1>
                    <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Hukuki süreçlerinizde profesyonel destek almak, danışmanlık hizmetlerimizden yararlanmak için ofisimizi ziyaret edebilir veya iletişim kanallarımızdan bize ulaşabilirsiniz.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-secondary flex items-start gap-6"
                        >
                            <div className="text-secondary text-2xl mt-1"><FaMapMarkerAlt /></div>
                            <div>
                                <h3 className="text-xl font-serif text-primary mb-2">Adres</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Köroğlu Mah. Şehit Erol Erdoğan Sok.<br />
                                    İskenderoğlu Apt. Kat: 2 Daire: 5<br />
                                    Merkez / Bolu
                                </p>
                            </div>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-secondary flex items-start gap-6"
                        >
                            <div className="text-secondary text-2xl mt-1"><FaPhone /></div>
                            <div>
                                <h3 className="text-xl font-serif text-primary mb-2">Telefon</h3>
                                <p className="text-gray-600 mb-2">
                                    <a href="tel:+905393999955" className="hover:text-secondary transition-colors block">+90 539 399 99 55</a>
                                    <a href="tel:+905422603180" className="hover:text-secondary transition-colors block mt-1">+90 542 260 31 80</a>
                                </p>
                                <p className="text-sm text-gray-500">Hafta İçi: 09:00 - 18:00</p>
                            </div>
                        </motion.div>

                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-secondary flex items-start gap-6"
                        >
                            <div className="text-secondary text-2xl mt-1"><FaEnvelope /></div>
                            <div>
                                <h3 className="text-xl font-serif text-primary mb-2">E-Mail</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:info@yanarhukuk.com" className="hover:text-secondary transition-colors">info@yanarhukuk.com</a>
                                </p>
                            </div>
                        </motion.div>

                        {/* Whatsapp Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a
                                href="https://wa.me/905393999955"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-sm font-bold hover:bg-[#128C7E] transition-colors shadow-lg"
                            >
                                <FaWhatsapp size={24} />
                                WHATSAPP İLE YAZIN
                            </a>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-white p-4 rounded-sm shadow-xl h-[600px]"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Yanar%20Hukuk%20%26%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20B%C3%BCrosu%20Bolu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Yanar Hukuk Office Map"
                        ></iframe>
                        {/* Note: Map helps users visually locate.*/}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
