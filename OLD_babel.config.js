module.exports = (api) => {
  api.cache(false)

  const presets = [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@babel/preset-react',
  ]
  const env = { test : { plugins : ["@babel/plugin-transform-runtime"] } }

  return {
    presets, env,
  }
}
