import React from 'react';
import { FaUserTie, FaGraduationCap, FaHistory, FaAward } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Hakkımızda</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Öztürk Hukuk Bürosu olarak dürüstlük, güven ve mesleki etik ilkelerinden taviz vermeden müvekkillerimize kaliteli hukuki hizmet sunmaktayız.
          </p>
        </div>

        {/* Firm History */}
        <section className="mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="rounded-lg shadow-xl bg-slate-300 h-80 w-full flex items-center justify-center">
                  <span className="text-slate-500">Hukuk Bürosu Görseli</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold text-navy mb-6">Büromuzun Tarihçesi</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Av. Mehmet Öztürk tarafından 2002 yılında Bolu'da kurulan hukuk büromuz, 20 yılı aşkın süredir müvekkillerine hizmet vermektedir.
                  </p>
                  <p>
                    Bolu'nun merkezinde bulunan ofisimizde, her biri kendi alanında uzmanlaşmış, deneyimli avukatlardan oluşan ekibimizle, bireysel ve kurumsal müvekkillerimize geniş bir yelpazede hukuki hizmetler sunmaktayız.
                  </p>
                  <p>
                    Müvekkillerimizin haklarını korumak ve hukuki sorunlarına kalıcı çözümler üretmek için çalışırken, teknolojik gelişmeleri yakından takip ediyor ve bu gelişmeleri hukuki hizmetlerimize entegre ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-500 rounded-full p-4">
                  <FaHistory className="text-4xl text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4 text-center">Misyonumuz</h2>
              <p className="text-gray-600">
                Hukukun üstünlüğü ilkesinden taviz vermeden, müvekkillerimizin haklarını en etkin şekilde korumak, hukuki süreçlerde onlara rehberlik etmek ve adalete ulaşmalarını sağlamaktır. Her bir davaya ve müvekkile özel yaklaşım sergileyerek, mesleki etik kuralları çerçevesinde çözüm odaklı hizmet sunmak temel misyonumuzdur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-500 rounded-full p-4">
                  <FaAward className="text-4xl text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4 text-center">Vizyonumuz</h2>
              <p className="text-gray-600">
                Bolu'da ve bölgemizde, adil, erişilebilir ve kaliteli hukuki hizmet anlayışıyla tanınan, müvekkillerinin güvenini kazanmış, hukukun her alanında yetkin bir hukuk bürosu olmaktır. Sürekli kendini yenileyen, güncel hukuki gelişmeleri takip eden ve bu gelişmeleri müvekkillerinin yararına kullanan bir anlayışla hareket etmeyi hedefliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Ekibimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Attorney 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <img src="/logoyanar.png" alt="Av. Mehmet Öztürk" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-navy mb-2">Av. Mehmet Öztürk</h3>
                <p className="text-amber-500 font-medium mb-3">Kurucu Ortak</p>
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Ankara Üniversitesi Hukuk Fakültesi</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Ceza Hukuku, Gayrimenkul Hukuku</span>
                </div>
                <p className="text-gray-600 text-sm">
                  2002 yılından bu yana aktif olarak avukatlık yapan Av. Mehmet Öztürk, özellikle ceza hukuku ve gayrimenkul hukuku alanlarında uzmanlaşmıştır.
                </p>
              </div>
            </div>

            {/* Attorney 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <img src="/logoyanar.png" alt="Av. Ayşe Öztürk" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-navy mb-2">Av. Ayşe Öztürk</h3>
                <p className="text-amber-500 font-medium mb-3">Ortak</p>
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <span className="text-gray-600">İstanbul Üniversitesi Hukuk Fakültesi</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Aile Hukuku, Miras Hukuku</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Av. Ayşe Öztürk, 15 yıllık mesleki deneyimiyle özellikle aile hukuku ve miras hukuku alanlarında başarılı çalışmalar yürütmektedir.
                </p>
              </div>
            </div>

            {/* Attorney 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <img src="/logoyanar.png" alt="Av. Ali Yılmaz" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-navy mb-2">Av. Ali Yılmaz</h3>
                <p className="text-amber-500 font-medium mb-3">Kıdemli Avukat</p>
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Marmara Üniversitesi Hukuk Fakültesi</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-gray-500 mr-2" />
                  <span className="text-gray-600">Ticaret Hukuku, İş Hukuku</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Av. Ali Yılmaz, ticaret hukuku ve iş hukuku alanlarında geniş bilgi ve deneyime sahiptir. Kurumsal müvekkillere danışmanlık hizmeti vermektedir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage; 