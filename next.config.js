module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/', query: { title: '首页'} },
      '/about': { page: '/about' },
      '/user/info': { page: '/user/info'},
      '/user/setinfo': { page: '/user/setinfo'},
    }
  }
}