import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaPhone } from 'react-icons/fa';

const serviceDetails = {
    'ceza-hukuku': {
        title: 'Bolu Ceza Avukatı & Ceza Hukuku',
        description: 'Yanar Hukuk & Danışmanlık olarak, Bolu ve çevre illerdeki Ağır Ceza ve Asliye Ceza davalarında müvekkillerimizin haklarını titizlikle savunuyoruz. Bolu ceza avukatı ihtiyaçlarınızda, soruşturma aşamasından kovuşturma ve infaz sürecine kadar yanınızdayız.',
        features: [
            'Bolu Ağır Ceza Mahkemesi davaları',
            'Bolu Asliye Ceza Mahkemesi süreçleri',
            'İfade ve sorgu işlemlerinde avukatlık',
            'Tutukluluğa itiraz ve tahliye talepleri',
            'Uyuşturucu, hırsızlık, yaralama suçları savunması',
            'Bilişim suçları ve ceza davaları'
        ]
    },
    'aile-hukuku': {
        title: 'Bolu Boşanma Avukatı & Aile Hukuku',
        description: 'Bolu boşanma avukatı olarak, aile hukukundan kaynaklanan anlaşmalı ve çekişmeli boşanma davalarında Yanar Hukuk & Danışmanlık güvencesiyle hizmet veriyoruz. Velayet, nafaka ve mal paylaşımı süreçlerini Bolu Adliyesi nezdinde profesyonelce yönetiyoruz.',
        features: [
            'Bolu anlaşmalı boşanma protokolü hazırlama',
            'Çekişmeli boşanma ve tazminat davaları',
            'Velayet davaları ve çocukla kişisel ilişki',
            'Nafaka artırım ve azaltım davaları',
            'Mal rejimi tasfiyesi ve katılma alacağı',
            'Uzaklaştırma kararı ve ailenin korunması'
        ]
    },
    'gayrimenkul-hukuku': {
        title: 'Bolu Gayrimenkul Avukatı & Tapu Davaları',
        description: 'Bolu gayrimenkul avukatı olarak, taşınmaz hukuku alanındaki birikimimizle tapu iptal, tescil ve kira davalarında hizmetinizdeyiz. Yanar Hukuk & Danışmanlık, Bolu\'daki gayrimenkul yatırımlarınızın hukuki güvenliğini sağlar.',
        features: [
            'Tapu iptal ve tescil davaları',
            'Bolu kira hukuku ve tahliye davaları',
            'İzaleyi şuyu (Ortaklığın giderilmesi) davaları',
            'Kamulaştırma ve bedel artırım davaları',
            'Arsa payı karşılığı inşaat sözleşmeleri',
            'Ecrimisil ve müdahalenin men-i davaları'
        ]
    },
    'ticaret-hukuku': {
        title: 'Bolu Şirketler Hukuku & Ticaret Avukatı',
        description: 'Bolu\'da faaliyet gösteren şirketlere, Yanar Hukuk & Danışmanlık olarak kurumsal hukuk danışmanlığı sunuyoruz. Ticari alacakların tahsili, sözleşmeler ve şirketler hukuku konularında uzman desteği sağlıyoruz.',
        features: [
            'Şirket kuruluş ve ana sözleşme işlemleri',
            'Ticari alacak davaları ve icra takibi',
            'Haksız rekabet ve marka hukuku',
            'Kıymetli evrak (Çek, Senet) davaları',
            'Şirket birleşme, devralma ve tür değiştirme',
            'Konkordato ve iflas erteleme süreçleri'
        ]
    },
    'is-hukuku': {
        title: 'Bolu İş Avukatı & İş Hukuku',
        description: 'Yanar Hukuk & Danışmanlık, Bolu iş avukatı olarak işçi ve işveren uyuşmazlıklarında çözüm odaklı hizmet sunar. İşe iade, kıdem tazminatı ve iş kazası davalarında hak kayıplarının önüne geçiyoruz.',
        features: [
            'İşe iade davaları ve arabuluculuk',
            'Kıdem ve ihbar tazminatı hesaplama',
            'Bolu iş mahkemesi davaları',
            'Mobbing ve kötü niyet tazminatı',
            'İş kazası maddi ve manevi tazminat',
            'Hizmet tespiti davaları'
        ]
    },
    'sigorta-hukuku': {
        title: 'Bolu Sigorta Avukatı & Tazminat Hukuku',
        description: 'Trafik kazaları ve sigorta uyuşmazlıklarında Yanar Hukuk & Danışmanlık olarak değer kaybı ve tazminat süreçlerini yönetiyoruz. Bolu\'da yaşanan kazalarda hak ettiğiniz tazminatı almanız için çalışıyoruz.',
        features: [
            'Trafik kazası tazminat davaları',
            'Araç değer kaybı başvuruları',
            'Sigorta Tahkim Komisyonu başvuruları',
            'Destekten yoksun kalma tazminatı',
            'Bedeni hasar ve maluliyet tazminatı',
            'Kasko ve trafik sigortası redlerine itiraz'
        ]
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = serviceDetails[slug];

    if (!service) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Hizmet bulunamadı</h2>
                    <Link to="/" className="text-secondary underline">Anasayfaya Dön</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section - Navbar arkasına geçmesi için üst padding yok, içerik pt-32 ile başlıyor */}
            <div className="bg-primary text-white pt-32 pb-20 px-6 relative">
                {/* Background pattern or subtle overlay could go here */}
                <div className="container mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-400 hover:text-secondary mb-6 transition-colors">
                        <FaArrowLeft className="mr-2" /> Anasayfaya Dön
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">{service.title}</h1>
                    <div className="w-24 h-1 bg-white/20"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 md:p-12 shadow-xl rounded-sm"
                        >
                            <h2 className="text-2xl font-serif text-secondary mb-6">{service.title} Hakkında</h2>
                            <p className="text-gold-dark leading-relaxed text-lg mb-8">
                                {service.description}
                            </p>

                            <h3 className="text-xl font-bold text-secondary mb-6">Bolu {service.title.split('&')[1] || 'Hukuk'} Hizmetlerimiz</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-gold-light/10 rounded border border-gold-light/20 hover:border-secondary/30 transition-colors">
                                        <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                                        <span className="text-gold-dark text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-gold-light/20 border-l-4 border-secondary text-sm text-gold-dark italic">
                                Yanar Hukuk & Danışmanlık olarak, Bolu ve çevre illerdeki tüm {service.title.toLowerCase()} süreçlerinizde hak kaybı yaşamamanız için profesyonel hukuki destek sağlıyoruz.
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        {/* Contact Card */}
                        <div className="bg-[#202020] text-gold-light p-8 rounded-sm text-center sticky top-24">
                            <h3 className="text-xl font-serif mb-4">Bolu Avukat Desteği</h3>
                            <p className="text-gold-light/70 text-sm mb-6">
                                Yanar Hukuk & Danışmanlık'tan randevu alarak hukuki sürecinizi hemen başlatabilirsiniz.
                            </p>
                            <a
                                href="tel:+905393999955"
                                className="inline-flex items-center justify-center gap-2 w-full bg-secondary py-3 px-6 rounded-sm font-bold hover:bg-[#8e715b] transition-colors text-white mb-2"
                            >
                                <FaPhone size={14} /> 0539 399 99 55
                            </a>
                            <a
                                href="tel:+905422603180"
                                className="inline-flex items-center justify-center gap-2 w-full bg-secondary py-3 px-6 rounded-sm font-bold hover:bg-[#8e715b] transition-colors text-white"
                            >
                                <FaPhone size={14} /> 0542 260 31 80
                            </a>
                        </div>

                        {/* Other Services */}
                        <div className="bg-white p-6 shadow-lg rounded-sm border-t-4 border-secondary">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gold-light/20">Diğer Uzmanlık Alanlarımız</h3>
                            <ul className="space-y-3">
                                {Object.keys(serviceDetails).map((key) => {
                                    if (key === slug) return null;
                                    return (
                                        <li key={key}>
                                            <Link
                                                to={`/hizmet/${key}`}
                                                className="block text-gold-dark hover:text-secondary hover:translate-x-1 transition-all text-sm"
                                            >
                                                › {serviceDetails[key].title.split('&')[0]}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
