import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const Secondary = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.white};
  border: solid rgba(0, 122, 255, 0.4) 1px;
  color: ${props => props.theme.colors.lightBlue};
  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
    border: solid ${props => props.theme.colors.lightBlue} 1px;
    color: ${props => props.theme.colors.white};
  }
`
