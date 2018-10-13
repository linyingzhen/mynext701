module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/user/info': { page: '/user/info'},
      '/user/setinfo': { page: '/user/setinfo'},
    }
  }
}