module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const path = require('path')
      const { dir, defaultLoaders, dev, isServer } = options

      config.resolve.extensions.push('.ls')

      config.module.rules.push({
        test: /\.ls$/,
        include: [dir],
        exclude: /node_modules/,
        loader: 'livescript-loader?const=true'
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
