function stringify (obj, { EOL = '\n', finalEOL = true, replacer = null, spaces } = {}) {
  const EOF = finalEOL ? EOL : ''
  const str = JSON.stringify(obj, replacer, spaces)

  return str.replace(/\n/g, EOL) + EOF
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  return content.replace(/^\uFEFF/, '')
}

function assetsPath(relativePath) {
  // 在这里定义您的 assetsPath 函数逻辑，
  // 比如返回构建过程中静态资源的最终路径
}

module.exports = { stringify, stripBom, assetsPath }; // 导出 assetsPath 函数

