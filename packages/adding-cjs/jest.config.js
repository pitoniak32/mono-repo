/** @type {import('jest').Config} */

const pjson = require('./package.json')

module.exports = {
  displayName: pjson.name || 'UNKNOWN-ENSURE-SET-IN-PACKAGE-JSON',
  preset: '../../jest.preset.js',
}
