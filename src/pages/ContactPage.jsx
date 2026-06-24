import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderim mantığı burada olacak
    console.log('Form verileri:', formData);
    setFormSubmitted(true);
    
    // Form gönderildikten sonra formu sıfırla
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">İletişim</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hukuki sorularınız veya randevu talepleriniz için bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-navy mb-6">Bize Mesaj Gönderin</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                >
                  Mesajı Gönder
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">İletişim Bilgilerimiz</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-2 mr-3">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Adres</h3>
                    <p className="text-gray-600">Bahçelievler Mah. Adalet Cad. No:15, Kat:3 D:8, Merkez/Bolu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-2 mr-3">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+901234567890" className="hover:text-amber-500 transition-colors">
                        +90 (123) 456 78 90
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-2 mr-3">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">E-posta</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ozturkhukuk.com" className="hover:text-amber-500 transition-colors">
                        info@ozturkhukuk.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-500 rounded-full p-2 mr-3">
                    <FaClock className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Çalışma Saatleri</h3>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-slate-200 h-72 rounded-lg flex items-center justify-center text-gray-500">
                <p>Google Haritası Burada Gösterilecek</p>
                {/* Gerçek bir Google Maps embed burada yer alabilir:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.118376068325!2d31.59273673186525!3d40.73519746341758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3b3427b03547%3A0xa34bea53cfe08d56!2sBolu%20Adalet%20Saray%C4%B1!5e0!3m2!1str!2str!4v1682162718994!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 