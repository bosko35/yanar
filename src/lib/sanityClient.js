import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Kullanıcı Sanity projesini kurduğunda buradaki bilgileri kendi projesiyle değiştirecek
// Şimdilik demo/mock modunda çalışabilir veya boş tanımlanabilir.
export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'demo-project-id', // Burayı README'ye göre dolduracağız
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03', // Güncel tarih
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    if (!source) return null;
    return builder.image(source);
}

// Ortam değişkenleri gelene kadar sahte (mock) veri döndürmek için yardımcı bir fonksiyon
export const isSanityConfigured = () => {
    return import.meta.env.VITE_SANITY_PROJECT_ID && import.meta.env.VITE_SANITY_PROJECT_ID !== 'demo-project-id';
};
