// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-availablehomes-js": () => import("./../../../src/pages/availablehomes.js" /* webpackChunkName: "component---src-pages-availablehomes-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-residents-js": () => import("./../../../src/pages/residents.js" /* webpackChunkName: "component---src-pages-residents-js" */),
  "component---src-templates-home-js": () => import("./../../../src/templates/Home.js" /* webpackChunkName: "component---src-templates-home-js" */)
}

