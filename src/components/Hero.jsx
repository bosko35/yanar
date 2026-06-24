import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] w-full bg-primary overflow-hidden flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c0e0b] to-[#2c241b]">
            </div>

            {/* Hero Content */}
            <div className="relative z-20 container mx-auto px-6 text-center text-gold-light mt-12 flex flex-col items-center justify-center h-full">
                {/* Mobile Decorative Border */}
                <div className="absolute inset-4 border border-secondary/20 rounded-lg md:hidden pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:pt-0 pt-20"
                >


                    <h2 className="font-script text-5xl md:text-7xl lg:text-8xl text-secondary mb-6 md:mb-4 drop-shadow-lg leading-tight">
                        Profesyonel <br className="md:hidden" /> Hukuki Destek
                    </h2>
                    <p className="font-serif text-lg md:text-3xl font-light tracking-wide mb-10 md:mb-8 max-w-3xl mx-auto leading-relaxed text-gold-light/90 px-4">
                        Bolu'da modern yaklaşımla hukuki ihtiyaçlarınıza güvenilir çözümler sunuyoruz.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 px-4">
                        <Link
                            to="/randevu"
                            className="w-full md:w-auto px-8 py-4 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest font-semibold rounded-sm text-sm"
                        >
                            Randevu Al
                        </Link>
                        <a
                            href="/#hizmetler"
                            className="w-full md:w-auto px-8 py-4 bg-secondary text-primary hover:bg-[#cbb66a] transition-all duration-300 uppercase tracking-widest font-semibold rounded-sm flex items-center justify-center text-sm"
                        >
                            Hizmetlerimiz
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Glassmorphism Cards at Bottom */}
            <div className="absolute bottom-0 left-0 w-full z-30 hidden lg:block">
                <div className="grid grid-cols-3 h-32">
                    {[
                        { title: "Dava Takibi", icon: <FaGavel size={32} />, desc: "Profesyonel dava süreç yönetimi" },
                        { title: "Danışmanlık", icon: <FaHandshake size={32} />, desc: "Hukuki konularda uzman görüşü" },
                        { title: "Arabuluculuk", icon: <FaBalanceScale size={32} />, desc: "Alternatif uyuşmazlık çözümleri" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`
                group relative flex items-center justify-center gap-6 
                backdrop-blur-md bg-white/5 hover:bg-secondary/90 transition-all duration-500 cursor-pointer
                border-r border-white/10 last:border-r-0
              `}
                        >
                            <div className="p-4 rounded-full border border-gold-light/20 group-hover:border-gold-light text-secondary group-hover:text-gold-light transition-colors">
                                {item.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif text-xl text-gold-light mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                <p className="text-gold-light/60 text-sm group-hover:text-gold-light/90">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Hero;
