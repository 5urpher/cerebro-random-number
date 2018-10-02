const icon = require('../assets/icon.png')

const plugin =  ({ term, display, actions }) => {

  const match = term.match(/rngen(?:\s(\d+))?/)

  if (match) {
    let rNumber = getRandomNum(match[1] || 4)

    display({
      title: rNumber,
      icon,
      clipboard: rNumber,
      onSelect: () => {
        actions.copyToClipboard(rNumber)
      },
      getPreview: () => {
        return `<div> ${rNumber}</div>`
      }
    })
  }
}

const getRandomNum = (length) => {
  let randomNum = (Math.pow(10, length).toString().slice(length - 1) + Math.floor((Math.random() * Math.pow(10, length)) + 1).toString()).slice(-length)
  return randomNum
}

module.exports = {
  fn: plugin,
  name: 'Random Number Generator',
  keyword: 'rngen',
  icon
}