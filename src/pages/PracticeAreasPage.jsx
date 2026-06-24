import React from 'react';
import { FaBalanceScale, FaHome, FaUsers, FaGavel, FaBriefcase, FaUniversity, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';

const PracticeAreasPage = () => {
  const expertiseAreas = [
    {
      id: 'aile-hukuku',
      title: 'Aile Hukuku',
      icon: <FaUsers className="text-5xl text-amber-500 mb-4" />,
      description: 'Boşanma, velayet, nafaka, mal paylaşımı ve evlat edinme gibi aile hukukundan doğan uyuşmazlıklarda profesyonel destek sağlıyoruz.',
      details: [
        'Anlaşmalı ve çekişmeli boşanma davaları',
        'Nafaka davaları (iştirak, yoksulluk, tedbir)',
        'Velayet davaları',
        'Mal paylaşımı davaları',
        'Nişan bozma davası ve maddi tazminat',
        'Evlat edinme işlemleri'
      ]
    },
    {
      id: 'ceza-hukuku',
      title: 'Ceza Hukuku',
      icon: <FaGavel className="text-5xl text-amber-500 mb-4" />,
      description: 'Suç isnatları, soruşturma ve kovuşturma aşamalarında etkin hukuki savunma ve danışmanlık hizmetleri sunmaktayız.',
      details: [
        'Soruşturma ve kovuşturma aşamaları',
        'Ağır ceza davalarında savunma',
        'Tutukluluk itirazları',
        'Uzlaştırma süreçleri',
        'İnfaz hukuku uygulamaları',
        'Adli sicil ve sabıka kaydı düşürme işlemleri'
      ]
    },
    {
      id: 'gayrimenkul-hukuku',
      title: 'Gayrimenkul Hukuku',
      icon: <FaHome className="text-5xl text-amber-500 mb-4" />,
      description: 'Taşınmaz mülkiyeti, kat mülkiyeti, inşaat, kira, imar ve tahliye davalarında kapsamlı hukuki destek sağlıyoruz.',
      details: [
        'Tapu ve kadastro davaları',
        'Kat mülkiyeti uyuşmazlıkları',
        'Kira hukuku davaları',
        'Tahliye davaları',
        'İnşaat ve imar hukuku davaları',
        'Kamulaştırma davaları'
      ]
    },
    {
      id: 'is-hukuku',
      title: 'İş Hukuku',
      icon: <FaBriefcase className="text-5xl text-amber-500 mb-4" />,
      description: 'İşçi-işveren ilişkilerinden kaynaklanan her türlü hukuki uyuşmazlıkta profesyonel danışmanlık ve dava takibi hizmetleri veriyoruz.',
      details: [
        'İşe iade davaları',
        'Kıdem ve ihbar tazminatı davaları',
        'İş kazası tazminat davaları',
        'Mobbing davaları',
        'Toplu iş hukuku uyuşmazlıkları',
        'İş sözleşmesi hazırlama ve danışmanlık'
      ]
    },
    {
      id: 'ticaret-hukuku',
      title: 'Ticaret Hukuku',
      icon: <FaMoneyBillWave className="text-5xl text-amber-500 mb-4" />,
      description: 'Şirketler hukuku, ticari sözleşmeler, haksız rekabet ve kıymetli evrak hukuku alanlarında kapsamlı danışmanlık sunuyoruz.',
      details: [
        'Şirket kuruluşu ve tasfiyesi',
        'Ticari sözleşmelerin hazırlanması',
        'Fikri mülkiyet ve marka tescil işlemleri',
        'Haksız rekabet davaları',
        'Çek ve senet işlemleri',
        'Ticari alacak davaları'
      ]
    },
    {
      id: 'idare-hukuku',
      title: 'İdare Hukuku',
      icon: <FaUniversity className="text-5xl text-amber-500 mb-4" />,
      description: 'İdari işlem ve kararların iptali, tam yargı davaları ve idari sözleşmelerden doğan uyuşmazlıklar konusunda hukuki destek sağlıyoruz.',
      details: [
        'İdari işlemlerin iptali davaları',
        'Tam yargı davaları',
        'Kamulaştırma davaları',
        'İmar planı itirazları',
        'Kamu ihale uyuşmazlıkları',
        'Danıştay nezdinde temyiz başvuruları'
      ]
    },
    {
      id: 'miras-hukuku',
      title: 'Miras Hukuku',
      icon: <FaClipboardList className="text-5xl text-amber-500 mb-4" />,
      description: 'Miras paylaşımı, vasiyetname, miras reddi, mirasçılık belgesi ve terekenin paylaşımı konularında hukuki danışmanlık sağlıyoruz.',
      details: [
        'Miras taksim davaları',
        'Vasiyetname hazırlama ve itiraz',
        'Mirasçılık belgesi çıkarma',
        'Miras reddi işlemleri',
        'Tenkis (miras iptal) davaları',
        'Saklı pay davaları'
      ]
    },
    {
      id: 'icra-iflas-hukuku',
      title: 'İcra ve İflas Hukuku',
      icon: <FaBalanceScale className="text-5xl text-amber-500 mb-4" />,
      description: 'Alacak tahsili, haciz işlemleri, iflas ve konkordato süreçlerinde hukuki takip ve danışmanlık hizmetleri veriyoruz.',
      details: [
        'İcra takibi başlatma ve takip',
        'İcra ve iflas hukuku davaları',
        'Haciz işlemleri',
        'İflas erteleme ve konkordato süreçleri',
        'İtirazın iptali ve menfi tespit davaları',
        'Borçtan kurtulma yolları danışmanlığı'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Uzmanlık Alanlarımız</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Farklı hukuk alanlarında uzmanlaşmış avukatlarımızla, karmaşık hukuki sorunlara etkin ve kalıcı çözümler üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div key={area.id} id={area.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="p-8 text-center">
                {area.icon}
                <h3 className="text-2xl font-semibold text-navy mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="space-y-2 text-left">
                  <h4 className="font-medium text-navy">Hizmetlerimiz:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {area.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasPage; 