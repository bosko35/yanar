import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="iletisim" className="bg-primary text-gold-light/80 pt-20 pb-10 border-t-4 border-secondary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <h2 className="text-2xl font-serif text-gold-light mb-6">YANAR HUKUK</h2>
                        <p className="leading-relaxed mb-6 font-light">
                            Bolu'da güvenilir hukuk ve danışmanlık hizmetleri. Adalet ve dürüstlük ilkelerinden ödün vermeden yanınızdayız.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold-light text-lg font-serif mb-6 relative inline-block">
                            Hızlı Erişim
                            <span className="block h-0.5 w-1/2 bg-secondary mt-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Anasayfa', 'Kurumsal', 'Hizmetlerimiz', 'İletişim'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                                        <span className="text-secondary text-xs">›</span> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-gold-light text-lg font-serif mb-6 relative inline-block">
                            Çalışma Alanları
                            <span className="block h-0.5 w-1/2 bg-secondary mt-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Ceza Hukuku', 'Aile Hukuku', 'Ticaret Hukuku', 'İş Hukuku', 'Sigorta Hukuku'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                                        <span className="text-secondary text-xs">›</span> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gold-light text-lg font-serif mb-6 relative inline-block">
                            İletişim Bilgileri
                            <span className="block h-0.5 w-1/2 bg-secondary mt-2"></span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                                <p>Köroğlu Mah. Şehit Erol Erdoğan Sok.<br />İskenderoğlu Apt. Kat: 2 Daire: 5<br />Merkez / Bolu</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaPhone className="text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <p>+90 539 399 99 55</p>
                                    <p>+90 542 260 31 80</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-secondary flex-shrink-0" />
                                <p>info@yanarhukuk.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gold-light/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Yanar Hukuk & Danışmanlık. Tüm Hakları Saklıdır.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold-light">KVKK Metni</a>
                        <a href="#" className="hover:text-gold-light">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-gold-light">Yasal Uyarı</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
