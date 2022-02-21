export const data = {
  "key": "v-7bdf7ae8",
  "path": "/protocol.html",
  "title": "Protocol",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Latest draft",
      "slug": "latest-draft",
      "children": []
    },
    {
      "level": 2,
      "title": "Historical drafts",
      "slug": "historical-drafts",
      "children": []
    },
    {
      "level": 2,
      "title": "Contributing",
      "slug": "contributing",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "protocol.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
