export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Alıntı (Quote)', value: 'blockquote' },
            ],
            lists: [{ title: 'Maddeli', value: 'bullet' }, { title: 'Numaralı', value: 'number' }],
            marks: {
                decorators: [
                    { title: 'Kalın', value: 'strong' },
                    { title: 'Eğik', value: 'em' },
                ],
                annotations: [
                    {
                        title: 'URL (Link)',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: { hotspot: true },
        },
    ],
}
