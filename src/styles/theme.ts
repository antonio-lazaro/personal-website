const baseTheme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
}

const lightColors = {
  bg: '#ffffff',
  primaryText: '#111111',
  secondaryText: '#c3c3c3',
  placeholder: '#d1d1d1',
  icon: '#c2c2c2',
  btnBg: '#111111',
  btnText: '#ffffff',
  suggestionBg: '#ededed',
  suggestionText: '#3e3e3e',
  footerText: '#9a9a9a',
  footerHighlightedText: '#4c4c4c',
  border: '#e4e4e4',
  postParagraph: '#3D3D3D',
}

const darkColors = {
  bg: '#0d121e',
  primaryText: '#e6e7e8',
  secondaryText: '#4c4f58',
  placeholder: '#3B3F48',
  icon: '#cfd0d2',
  btnBg: '#262A35',
  btnText: '#d2d3d5',
  suggestionBg: '#1f242f',
  suggestionText: '#989ba0',
  footerText: '#73767d',
  footerHighlightedText: '#bebfc2',
  border: '#262a35',
  postParagraph: '#999ca1',
}

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
}

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
}
