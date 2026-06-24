import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: "Av. Mehmet Kadir YANAR",
        role: "Kurucu Avukat",
        bio: "Bolu Barosu'na kayıtlı olarak avukatlık mesleğini icra eden Mehmet Kadir Yanar, Yanar Hukuk & Danışmanlık bürosunun kurucusudur. Ceza Hukuku, İmar Hukuku ve İcra Hukuku alanlarındaki derin tecrübesiyle tanınan Yanar, müvekkillerine şeffaf ve sonuç odaklı bir hukuki süreç sunmayı ilke edinmiştir.",
        specialties: ["Ceza Hukuku", "İmar Hukuku", "İcra Hukuku"],
        education: "Hukuk Fakültesi",
        image: "/logoyanar.png" // Local image
    },
    {
        name: "Av. Havva GÜLOĞLU",
        role: "Kıdemli Avukat",
        bio: "Ticaret Hukuku ve Gayrimenkul Hukuku alanlarında uzmanlaşan Havva Güloğlu, şirket danışmanlığı konusunda geniş bir portföye sahiptir. Karmaşık ticari uyuşmazlıkların çözümü ve gayrimenkul projelerinin hukuki altyapısının hazırlanmasında aktif rol almaktadır.",
        specialties: ["Ticaret Hukuku", "Gayrimenkul Hukuku", "Şirketler Hukuku"],
        education: "Hukuk Fakültesi",
        image: "/logoyanar.png" // Local image
    },
    {
        name: "Av. Gülnur DEMİRBAŞ",
        role: "Kıdemli Avukat",
        bio: "İş Hukuku ve Sigorta Hukuku alanında uzmanlaşan Gülnur Demirbaş, işçi-işveren uyuşmazlıkları ve iş kazası tazminatları konusunda deneyimlidir. Sigorta tahkim süreçlerindeki başarısıyla müvekkil haklarının tam olarak teslim edilmesini sağlamaktadır.",
        specialties: ["İş Hukuku", "Sigorta Hukuku", "Tazminat Hukuku"],
        education: "Hukuk Fakültesi",
        image: "/logoyanar.png" // Local image
    }
];

const Team = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-primary text-white pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">Uzman Kadromuz</h1>
                        <div className="w-24 h-1 bg-white/20 mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                            Yanar Hukuk & Danışmanlık olarak, her biri kendi alanında uzmanlaşmış dinamik ve tecrübeli ekibimizle profesyonel hukuki destek sağlıyoruz.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute -left-20 bottom-0 w-72 h-72 bg-gray-500 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Team Members Grid */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group bg-white rounded-sm shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-8 text-center relative">
                                <h3 className="text-2xl font-serif text-primary mb-1 group-hover:text-secondary transition-colors">{member.name}</h3>
                                <p className="text-secondary text-sm font-bold tracking-widest uppercase mb-4">{member.role}</p>

                                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>

                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Uzmanlık Alanları</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {member.specialties.map((spec, i) => (
                                            <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-serif text-primary mb-6">Hukuki Desteğe mi İhtiyacınız Var?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Bolu'da Yanar Hukuk & Danışmanlık ekibi olarak size yardımcı olmaktan memnuniyet duyarız.
                    </p>
                    <Link
                        to="/#iletisim"
                        className="inline-block bg-secondary text-white px-10 py-4 rounded-sm font-bold tracking-widest hover:bg-[#8e715b] transition-colors"
                    >
                        BİZE ULAŞIN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;
