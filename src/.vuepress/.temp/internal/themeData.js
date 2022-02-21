export const themeData = {
  "repo": "NaturalSelectionLabs",
  "docsRepo": "NaturalSelectionLabs/Pixltonian-Wiki",
  "sidebarDepth": 2,
  "docsDir": "src",
  "logo": "https://graphics.Pixltonian.workers.dev/",
  "locales": {
    "/": {
      "lang": "en-US",
      "label": "English",
      "editLinkText": "Edit this page on GitHub",
      "navbar": [
        {
          "text": "Guide",
          "link": "/"
        },
        {
          "text": "Tech Weekly",
          "link": "/tech-weekly/"
        },
        {
          "text": "Whitepaper",
          "link": "https://Pixltonian.io/#/whitepaper"
        },
        {
          "text": "Learn More",
          "children": [
            {
              "text": "Discord",
              "link": "https://discord.gg/Pixltonian"
            },
            {
              "text": "Telegram",
              "link": "https://t.me/Pixltonian_en"
            },
            {
              "text": "Twitter",
              "link": "https://twitter.com/Pixltonian_"
            },
            {
              "text": "Blog",
              "link": "https://Pixltonian.notion.site/"
            },
            {
              "text": "Join Us",
              "link": "https://Pixltonian.notion.site/Open-Source-Remote-Pixltonian-Offering-the-Dopest-Positions-Frontend-Full-stack-Decentralized-System--b6fdbffee017449797397f45340de9d4"
            },
            {
              "text": "Support Pixltonian",
              "link": "/support.md"
            }
          ]
        }
      ],
      "sidebar": {
        "/tech-weekly/": [
          {
            "text": "Tech Weekly",
            "children": [
              "README.md"
            ]
          }
        ],
        "/": [
          {
            "text": "Guide",
            "children": [
              "README.md",
              "faq.md"
            ]
          },
          {
            "text": "Protocol",
            "children": [
              "protocol.md"
            ]
          },
          {
            "text": "SDK",
            "children": [
              "sdk-list.md"
            ]
          },
          {
            "text": "Network",
            "children": [
              "network-roadmap.md",
              "network-api.md",
              "network-data.md"
            ]
          },
          {
            "text": "Design",
            "children": [
              "design.md"
            ]
          },
          {
            "text": "Events",
            "children": [
              "events.md"
            ]
          }
        ]
      },
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
