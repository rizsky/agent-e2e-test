const fs = require('fs-extra')
const path = require('path')

const cypressConfigResolverByFile = (filename) => {
  const pathToConfigFile = path.resolve(__dirname, `${filename}.json`)
  console.log(pathToConfigFile)
  return fs.readJsonSync(pathToConfigFile)
}
const cypressConfigResolver = () => cypressConfigResolverByFile(process.env.ENV_STAGE || 'development')

module.exports.cypressConfigResolver = cypressConfigResolver
