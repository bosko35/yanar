import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'petition',
    title: 'Örnek Dilekçeler',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Dilekçe Başlığı',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'URL (Otomatik Oluştura Basın)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Kategoriler',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'excerpt',
            title: 'Kısa Açıklama (Listede görünecek kısım)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'fileAsset',
            title: 'İndirilebilir Word Dosyası (Opsiyonel)',
            type: 'file',
            options: {
                accept: '.doc,.docx,.pdf'
            }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Yayınlanma Tarihi',
            type: 'datetime',
        }),
        defineField({
            name: 'content',
            title: 'Dilekçe İçeriği (Buraya kopyala-yapıştır yapabilirsiniz)',
            type: 'blockContent',
        }),
    ],
})
