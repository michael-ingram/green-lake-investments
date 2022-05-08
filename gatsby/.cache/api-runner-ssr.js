var plugins = [{
      plugin: require('/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"3cataqo3","dataset":"production","watchMode":true,"token":"skiYKF7oqZjv92RlHor6amx8HjbdwVqT2BzMx6BOoguPZrDEsMuogS5QOvZ1WblcWYNplhohDLlE35eIw90og0jh5hJ0qksZ54vhoRfBMcuMjY8KKjxax8dX9iDMvCKHgKQJ7Kr0IzZtzrBSjUe88QU22QEritxtq8Jd7aXV9D2lmzb00Ou6"},
    },{
      plugin: require('/Users/mingram/react/GreenLakeInvestApp/green-lake/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
