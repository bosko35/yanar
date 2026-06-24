import { FaCity, FaUserFriends, FaGavel, FaBriefcase, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    { title: "Ceza Hukuku", slug: "ceza-hukuku", icon: <FaGavel />, desc: "Ağır ceza ve asliye ceza mahkemelerinde savunma ve danışmanlık hizmetleri." },
    { title: "Aile Hukuku", slug: "aile-hukuku", icon: <FaUserFriends />, desc: "Boşanma, velayet, nafaka ve mal paylaşımı davalarında uzman destek." },
    { title: "Gayrimenkul Hukuku", slug: "gayrimenkul-hukuku", icon: <FaCity />, desc: "Tapu iptal, tescil, kamulaştırma ve kira hukuku uyuşmazlıkları." },
    { title: "Ticaret Hukuku", slug: "ticaret-hukuku", icon: <FaBriefcase />, desc: "Şirketler hukuku, sözleşmeler ve ticari ihtilafların çözümü." },
    { title: "İş Hukuku", slug: "is-hukuku", icon: <FaShieldAlt />, desc: "İşe iade, kıdem tazminatı ve iş kazası davalarında hukuki destek." },
    { title: "Sigorta Hukuku", slug: "sigorta-hukuku", icon: <FaFileContract />, desc: "Trafik kazaları, değer kaybı ve sigorta tahkim süreçleri." },
];

const Services = () => {
    return (
        <section id="hizmetler" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary text-sm font-bold tracking-[0.2em] uppercase">Uzmanlık Alanlarımız</span>
                    <h2 className="text-4xl text-primary font-serif mt-2">Hukuki Hizmetlerimiz</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group border-t-4 border-transparent hover:border-secondary transform hover:-translate-y-2 flex flex-col"
                        >
                            <div className="text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {item.desc}
                            </p>
                            <Link
                                to={`/hizmet/${item.slug}`}
                                className="inline-block mt-auto text-sm font-bold text-primary border-b border-secondary pb-1 hover:text-secondary transition-colors w-max"
                            >
                                DETAYLI BİLGİ
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
