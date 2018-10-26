// module.exports = {
//   exportPathMap: async function (defaultPathMap) {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/user/info': { page: '/user/info'},
//       '/user/setinfo': { page: '/user/setinfo'},
//     }
//   }
// }

/* module.exports = {
  exportPathMap(defaultPathMap) {
    const pathMap = {};

    Object.entries(defaultPathMap).forEach(([key, value]) => {
      pathMap[key] = value;
    });

    return pathMap;
  },
}; */

module.exports = {
  staticMarkup: true
}
