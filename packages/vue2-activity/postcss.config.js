module.exports = ({ file }) => {
  // const designWidth = file.dirname.includes('node_modules/vant') ? 375 : 750
  const designWidth = 2160

  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
        unitPrecision: 3,
        minPixelValue: 1
      },
    },
  }
}
