import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Introduction"},["/index.html","/README.md"]],
  ["v-0ba6e57c","/design.html",{"title":"Desgin"},["/design","/design.md"]],
  ["v-6bd2cec7","/events.html",{"title":"Events"},["/events","/events.md"]],
  ["v-092a1d7c","/faq.html",{"title":"FAQ"},["/faq","/faq.md"]],
  ["v-6920b692","/network-api.html",{"title":"API"},["/network-api","/network-api.md"]],
  ["v-3a54b692","/network-data.html",{"title":"Data"},["/network-data","/network-data.md"]],
  ["v-3b50f5d5","/network-roadmap.html",{"title":"Roadmap"},["/network-roadmap","/network-roadmap.md"]],
  ["v-7bdf7ae8","/protocol.html",{"title":"Protocol"},["/protocol","/protocol.md"]],
  ["v-5b79cacf","/sdk-list.html",{"title":"List"},["/sdk-list","/sdk-list.md"]],
  ["v-760ae03a","/support.html",{"title":"Support Pixltonian"},["/support","/support.md"]],
  ["v-3b968950","/tech-weekly/02-18-2022.html",{"title":"Week 1 - February 18, 2022"},["/tech-weekly/02-18-2022","/tech-weekly/02-18-2022.md"]],
  ["v-c337f5e0","/tech-weekly/",{"title":"Introduction"},["/tech-weekly/index.html","/tech-weekly/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
