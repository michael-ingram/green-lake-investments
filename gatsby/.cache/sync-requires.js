

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/pages/about.js"))),
  "component---src-pages-availablehomes-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/pages/availablehomes.js"))),
  "component---src-pages-contact-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/pages/index.js"))),
  "component---src-pages-residents-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/pages/residents.js"))),
  "component---src-templates-home-js": (preferDefault(require("/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/src/templates/Home.js")))
}

