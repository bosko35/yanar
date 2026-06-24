import React from 'react';
import { FaUserTie, FaGraduationCap, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const AttorneysPage = () => {
  const attorneys = [
    {
      id: 1,
      name: 'Av. Mehmet Öztürk',
      title: 'Kurucu Ortak',
      imageUrl: '/logoyanar.png',
      education: 'Ankara Üniversitesi Hukuk Fakültesi',
      specialization: 'Ceza Hukuku, Gayrimenkul Hukuku',
      experience: '20+ yıl',
      bio: `
        Av. Mehmet Öztürk, Ankara Üniversitesi Hukuk Fakültesi'nden 2001 yılında mezun olmuştur. 
        Avukatlık stajını tamamladıktan sonra 2002 yılında Öztürk Hukuk Bürosu'nu kurmuştur.
        
        Özellikle ceza hukuku ve gayrimenkul hukuku alanlarında uzmanlaşmış olan Av. Öztürk, 
        20 yılı aşkın mesleki deneyimiyle müvekkillerine kaliteli hukuki hizmet sunmaktadır. 
        
        Türkiye Barolar Birliği ve Bolu Barosu üyesidir. Çeşitli meslek içi eğitim programlarına 
        katılarak mesleki gelişimine sürekli katkı sağlamaktadır.
      `,
      phone: '+90 (123) 456 78 90',
      email: 'mehmet.ozturk@ozturkhukuk.com',
      linkedin: 'https://linkedin.com/in/mehmetozturk'
    },
    {
      id: 2,
      name: 'Av. Ayşe Öztürk',
      title: 'Ortak',
      imageUrl: '/logoyanar.png',
      education: 'İstanbul Üniversitesi Hukuk Fakültesi',
      specialization: 'Aile Hukuku, Miras Hukuku',
      experience: '15+ yıl',
      bio: `
        Av. Ayşe Öztürk, İstanbul Üniversitesi Hukuk Fakültesi'nden 2006 yılında mezun olmuştur. 
        Mezuniyetinin ardından bir süre kurumsal şirketlerin hukuk departmanlarında çalıştıktan sonra 
        2010 yılında Öztürk Hukuk Bürosu'na katılmıştır.
        
        Aile hukuku ve miras hukuku alanlarında uzmanlaşmış olan Av. Öztürk, boşanma davaları, 
        velayet davaları, nafaka davaları, mal paylaşımı davaları ve miras davaları konularında 
        geniş deneyime sahiptir.
        
        Arabuluculuk sertifikasına sahip olan Av. Öztürk, aile hukuku uyuşmazlıklarında alternatif 
        çözüm yöntemleri konusunda da müvekkillerine rehberlik etmektedir.
      `,
      phone: '+90 (123) 456 78 91',
      email: 'ayse.ozturk@ozturkhukuk.com',
      linkedin: 'https://linkedin.com/in/ayseozturk'
    },
    {
      id: 3,
      name: 'Av. Ali Yılmaz',
      title: 'Kıdemli Avukat',
      imageUrl: '/logoyanar.png',
      education: 'Marmara Üniversitesi Hukuk Fakültesi',
      specialization: 'Ticaret Hukuku, İş Hukuku',
      experience: '10+ yıl',
      bio: `
        Av. Ali Yılmaz, Marmara Üniversitesi Hukuk Fakültesi'nden 2011 yılında mezun olmuştur. 
        Yüksek lisansını İstanbul Üniversitesi'nde Ticaret Hukuku alanında tamamlamıştır.
        
        Öztürk Hukuk Bürosu'na 2015 yılında katılan Av. Yılmaz, ticaret hukuku ve iş hukuku 
        alanlarında uzmanlaşmıştır. Şirket kurma, birleşme ve devralma, ticari sözleşmeler, 
        işe iade davaları, kıdem ve ihbar tazminatı davaları konularında müvekkillerine hukuki 
        danışmanlık ve dava takibi hizmetleri sunmaktadır.
        
        Özellikle kurumsal müvekkillere yönelik çalışmalar yürütmekte olup, şirketlerin 
        hukuki sorunlarının çözümüne katkı sağlamaktadır.
      `,
      phone: '+90 (123) 456 78 92',
      email: 'ali.yilmaz@ozturkhukuk.com',
      linkedin: 'https://linkedin.com/in/aliyilmaz'
    },
    {
      id: 4,
      name: 'Av. Zeynep Kaya',
      title: 'Avukat',
      imageUrl: '/logoyanar.png',
      education: 'Ankara Üniversitesi Hukuk Fakültesi',
      specialization: 'İdare Hukuku, İcra ve İflas Hukuku',
      experience: '5+ yıl',
      bio: `
        Av. Zeynep Kaya, Ankara Üniversitesi Hukuk Fakültesi'nden 2017 yılında mezun olmuştur. 
        Mezuniyetinin ardından Bolu'da stajını tamamlayarak 2018 yılında Öztürk Hukuk Bürosu'na katılmıştır.
        
        İdare hukuku ve icra-iflas hukuku alanlarında çalışmalarını sürdüren Av. Kaya, 
        idari işlemlerin iptali, tam yargı davaları, icra takibi, haciz işlemleri ve 
        itirazın iptali davaları konularında uzmanlaşmaktadır.
        
        Genç ve dinamik yaklaşımıyla, hukuki gelişmeleri yakından takip etmekte ve 
        mesleki gelişimine sürekli katkı sağlamaktadır.
      `,
      phone: '+90 (123) 456 78 93',
      email: 'zeynep.kaya@ozturkhukuk.com',
      linkedin: 'https://linkedin.com/in/zeynepkaya'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Avukatlarımız</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Her biri kendi alanında uzmanlaşmış, deneyimli avukatlarımızla tanışın.
            Alanında uzman kadromuzla hukuki süreçlerinizde yanınızdayız.
          </p>
        </div>

        <div className="space-y-16">
          {attorneys.map((attorney, index) => (
            <div
              key={attorney.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/3 bg-slate-100">
                <img
                  src={attorney.imageUrl}
                  alt={attorney.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-navy mb-1">{attorney.name}</h2>
                  <p className="text-amber-500 font-medium text-lg">{attorney.title}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-amber-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Eğitim:</strong> {attorney.education}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie className="text-amber-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Uzmanlık:</strong> {attorney.specialization}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie className="text-amber-500 mr-2" />
                    <span className="text-gray-700">
                      <strong>Deneyim:</strong> {attorney.experience}
                    </span>
                  </div>
                </div>

                <div className="text-gray-600 space-y-3 mb-6">
                  {attorney.bio.split('\n').filter(line => line.trim() !== '').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href={`tel:${attorney.phone}`}
                    className="flex items-center text-gray-700 hover:text-amber-500 transition-colors"
                  >
                    <FaPhone className="mr-2" />
                    <span>{attorney.phone}</span>
                  </a>
                  <a
                    href={`mailto:${attorney.email}`}
                    className="flex items-center text-gray-700 hover:text-amber-500 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    <span>{attorney.email}</span>
                  </a>
                  <a
                    href={attorney.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-amber-500 transition-colors"
                  >
                    <FaLinkedin className="mr-2" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttorneysPage; 