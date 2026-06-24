import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Yazar',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'İsim ve Soyisim',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'URL Kısmı (Slug)',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Fotoğraf',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Hakkında (Biyografi)',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
