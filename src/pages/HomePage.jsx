import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaHandshake, FaGavel, FaFileContract } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-navy text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Adalet Sizin <span className="text-amber-400">Hakkınız</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Deneyimli kadromuzla hukuki süreçlerinizde yanınızdayız. Güvenilir, şeffaf ve etkili çözümler sunuyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/uzmanlık-alanlarımız">
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-all">
                Uzmanlık Alanlarımız
              </button>
            </Link>
            <Link to="/iletisim">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-navy transition-all">
                Randevu Talep Edin
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Temel Değerler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12">Temel Değerlerimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg transition-transform hover:scale-105 shadow-sm">
              <FaBalanceScale className="text-5xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Adalet</h3>
              <p className="text-gray-600">Her zaman adaleti gözeterek, müvekkillerimizin haklarını en iyi şekilde savunuruz.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg transition-transform hover:scale-105 shadow-sm">
              <FaHandshake className="text-5xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Güven</h3>
              <p className="text-gray-600">Müvekkillerimizle karşılıklı güven ilişkisi kurar, sır saklama konusunda hassasiyet gösteririz.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg transition-transform hover:scale-105 shadow-sm">
              <FaGavel className="text-5xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Uzmanlık</h3>
              <p className="text-gray-600">Her alanda uzmanlaşmış avukatlarımızla en doğru hukuki desteği sağlarız.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg transition-transform hover:scale-105 shadow-sm">
              <FaFileContract className="text-5xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Şeffaflık</h3>
              <p className="text-gray-600">Süreçlerin her aşamasında açık iletişim kurar, müvekkillerimizi bilgilendiririz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları Özet */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Hukuk alanındaki geniş tecrübemizle müvekkillerimize kapsamlı hizmet sunuyoruz.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-navy mb-3">Aile Hukuku</h3>
              <p className="text-gray-600 mb-4">Boşanma, nafaka, velayet ve mal paylaşımı davalarında uzman kadromuzla yanınızdayız.</p>
              <Link to="/uzmanlık-alanlarımız#aile-hukuku" className="text-amber-500 font-medium hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-navy mb-3">Ceza Hukuku</h3>
              <p className="text-gray-600 mb-4">Soruşturma ve kovuşturma aşamalarında etkin savunma ve danışmanlık hizmetleri sunmaktayız.</p>
              <Link to="/uzmanlık-alanlarımız#ceza-hukuku" className="text-amber-500 font-medium hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-navy mb-3">Gayrimenkul Hukuku</h3>
              <p className="text-gray-600 mb-4">Tapu, inşaat, kira, imar ve tahliye davalarında kapsamlı hukuki destek sağlıyoruz.</p>
              <Link to="/uzmanlık-alanlarımız#gayrimenkul-hukuku" className="text-amber-500 font-medium hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/uzmanlık-alanlarımız">
              <button className="bg-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all">
                Tüm Uzmanlık Alanlarımız
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Özet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg shadow-xl bg-slate-300 h-80 w-full flex items-center justify-center">
                <span className="text-slate-500">Hukuk Bürosu Görseli</span>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-left">
              <h2 className="text-3xl font-bold text-navy mb-4">Hakkımızda</h2>
              <p className="text-gray-600 mb-6">
                Öztürk Hukuk Bürosu olarak 20 yılı aşkın süredir, farklı hukuk alanlarında ihtisaslaşmış avukatlarımızla müvekkillerimize kaliteli hizmet sunmaktayız.
              </p>
              <p className="text-gray-600 mb-6">
                Gerek şirketlere gerek kişilere, ulusal ve uluslararası kapsamda hukuki danışmanlık ve dava takibi konularında destek sağlamaktayız.
              </p>
              <Link to="/hakkımızda">
                <button className="bg-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-all">
                  Daha Fazla Bilgi
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Hukuki Destek İçin Yanınızdayız</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Hukuki sorularınız veya danışmanlık talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
          <Link to="/iletisim">
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-all">
              Bize Ulaşın
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 