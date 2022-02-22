const { description } = require('../../package')

module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Pixltonian',
            description: description,
        },
    },

    base: '/Pixltonian-Wiki/',

    head: [
        ['meta', { name: 'theme-color', content: '#0072ff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'https://graphics.Pixltonian.workers.dev/' }]
    ],

    themeConfig: {
        repo: 'bitwater',
        docsRepo: 'bitwater/Pixltonian-Wiki',
        docsBranch: 'master',
        sidebarDepth: 2,
        docsDir: 'src',
        logo: 'https://graphics.Pixltonian.workers.dev/',
        locales: {
            '/': {
                lang: 'en-US',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    {
                        text: 'Guide',
                        link: '/',
                    },
                    {
                        text: 'Tech Weekly',
                        link: '/tech-weekly/',
                    },
                    {
                        text: 'Whitepaper',
                        link: 'https://Pixltonian.io/#/whitepaper'
                    },
                    {
                        text: 'Learn More',
                        children: [
                            {
                                text: 'Discord',
                                link: 'https://discord.gg/Pixltonian'
                            },
                            {
                                text: 'Telegram',
                                link: 'https://t.me/Pixltonian_en'
                            },
                            {
                                text: 'Twitter',
                                link: 'https://twitter.com/Pixltonian_'
                            },
                            {
                                text: 'Blog',
                                link: 'https://Pixltonian.notion.site/'
                            },
                            {
                                text: 'Join Us',
                                link: 'https://Pixltonian.notion.site/Open-Source-Remote-Pixltonian-Offering-the-Dopest-Positions-Frontend-Full-stack-Decentralized-System--b6fdbffee017449797397f45340de9d4'
                            },
                            {
                                text: 'Support Pixltonian',
                                link: '/support.md'
                            },
                        ]
                    },
                ],
                sidebar: {
                    '/tech-weekly/': [
                        {
                            text: 'Tech Weekly',
                            children: [
                                'README.md',
                            ],
                        },
                    ],
                    '/': [
                        {
                            text: 'Guide',
                            children: [
                                'README.md',
                                'faq.md',
                            ],
                        },
                        {
                            text: 'Protocol',
                            children: [
                                'protocol.md',
                            ],
                        },
                        {
                            text: 'SDK',
                            children: [
                                'sdk-list.md',
                            ],
                        },
                        {
                            text: 'Network',
                            children: [
                                'network-roadmap.md',
                                'network-api.md',
                                'network-data.md',
                            ],
                        },
                        {
                            text: 'Design',
                            children: [
                                'design.md',
                            ],
                        },
                        {
                            text: 'Events',
                            children: [
                                'events.md',
                            ],
                        },
                    ],
                },
            },
        },
    },
}
