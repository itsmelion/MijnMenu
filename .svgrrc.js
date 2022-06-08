module.exports = {
  native: true,
  typescript: true,
  dimensions: true,
  prettier: false,
  memo: true,
  replaceAttrValues: {
    "#000": "{props.fill}",
    "#000000": "{props.fill}",
    "#F6F6F6": "{props.fill || '#F6F6F6'}"
  },
  svgProps: {
    pointerEvents: 'none',
  }
}
