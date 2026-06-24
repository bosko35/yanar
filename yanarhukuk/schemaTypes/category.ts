import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Kategori',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Kategori Adı',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Açıklama',
            type: 'text',
        }),
    ],
})
