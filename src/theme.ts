import { DefaultTheme } from 'styled-components'

const baseFont = 16

export const theme: DefaultTheme = {
  baseFontSize: `${baseFont}px`,
  colors: {
    hoveredBg: 'rgba(0, 0, 0, 0.2)',
    activeBg: 'rgba(0, 0, 0, 0.1)',

    white: '#FFF',
    darkBlue: '#1F2533',
    blue: '#0D44AA',
    lightBlue: '#007AFF',
    grey: '#5A6E7A',
    pending: '#ff9500',
    green: '#39B683',
    red: '#FF354E',

    regGrey: '#6F8593',
    medGrey: '#8EA3B0',
    lightGrey: '#B6C5CE',
    xtraLightGrey: '#F7F7F7',
    tableBG: '#FAFAFA',
    infoBlue: '#F0F9FF',
    toasterGreen: '#E9F5F0',
    errorRed: '#FEF7F8',
  },
  size: (...value: any) => value.reduce((a: string, i: number) => `${a} ${i / baseFont}rem`, ''),
}
