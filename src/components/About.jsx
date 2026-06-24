import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="kurumsal" className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
                <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#B08D74" d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,92.6,-8.1C93.5,5.1,89.1,18.5,81.6,30.3C74.1,42.1,63.5,52.3,51.8,60.8C40.1,69.3,27.3,76.1,13.8,78.2C0.3,80.3,-13.9,77.7,-26.8,72.2C-39.7,66.7,-51.3,58.3,-61.2,47.8C-71.1,37.3,-79.3,24.7,-81.8,11.2C-84.3,-2.3,-81.1,-16.7,-72.9,-28.1C-64.7,-39.5,-51.5,-47.9,-39.2,-55.3C-26.9,-62.7,-15.5,-69.1,-2.2,-72.5C11.1,-75.9,22.2,-76.3,32.5,-83.3L45.7,-76.3Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <h4 className="text-secondary tracking-[0.2em] text-sm uppercase font-bold">Kurucu Avukat</h4>
                        <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
                            Av. Mehmet Kadir YANAR
                        </h2>
                        <div className="w-20 h-1 bg-secondary mb-6"></div>

                        <p className="text-gray-300 font-light leading-relaxed text-lg">
                            2022 yılında Bolu'da kurulan Yanar Hukuk & Danışmanlık, genç ve dinamik kadrosuyla modern hukuki hizmetler sunmaktadır. Kuruluşumuzdan bu yana, adalet ve dürüstlük ilkelerinden taviz vermeden müvekkillerimizin haklarını savunmaktayız.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Aile hukuku ve ceza hukuku başta olmak üzere, gayrimenkul, ticaret, iş ve sigorta hukuku alanlarında uzmanlaşmış kadromuzla Bolu ve çevre illerde hizmet vermekteyiz. Her davayı şahsi bir sorumluluk bilinciyle ele alıyor, müvekkil memnuniyetini ön planda tutuyoruz.
                        </p>

                        <blockquote className="border-l-4 border-secondary pl-6 italic text-xl text-white/90 font-serif mt-8">
                            "Adalet mülkün temelidir."
                            <footer className="text-sm text-secondary mt-2 not-italic font-sans">- Mustafa Kemal Atatürk</footer>
                        </blockquote>


                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute top-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-sm z-0"></div>
                        <img
                            src="/logoyanar.png"
                            alt="Av. Mehmet Kadir YANAR"
                            className="relative z-10 rounded-sm shadow-2xl w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
