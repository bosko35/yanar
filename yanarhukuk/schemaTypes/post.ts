import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Makaleler',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Makale Başlığı',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'URL Kısmı (Slug) (Otomatik Oluştura Basın)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Yazar',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'categories',
            title: 'Kategoriler',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'mainImage',
            title: 'Makale Ana Resmi (Boş bırakılırsa logonuz gösterilir)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Kısa Özet (Ana sayfada/Listede görünecek yazı)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Yayınlanma Tarihi',
            type: 'datetime',
        }),
        defineField({
            name: 'content',
            title: 'Makale İçeriği (Buraya yazın)',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `Yazar: ${author}` }
        },
    },
})
