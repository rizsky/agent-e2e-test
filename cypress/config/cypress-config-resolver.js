const fs = require('fs-extra')
const path = require('path')

const cypressConfigResolverByFile = (filename) => {
  const pathToConfigFile = path.resolve(__dirname, `${filename}.json`)
  return fs.readJsonSync(pathToConfigFile)
}
const cypressConfigResolver = () => cypressConfigResolverByFile(process.env.CYPRESS_ENV || 'local')

module.exports.cypressConfigResolver = cypressConfigResolver
