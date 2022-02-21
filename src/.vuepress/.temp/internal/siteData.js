export const siteData = {
  "base": "/Pixltonian-Wiki/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#0072ff"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "https://graphics.Pixltonian.workers.dev/"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Pixltonian",
      "description": "Open protocol designed for all our cyber existence in the era of Web 3.0."
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
