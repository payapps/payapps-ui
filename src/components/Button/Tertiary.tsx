import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const Tertiary = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.medGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  &:hover {
    background-color: ${props => props.theme.colors.white};
    border: solid rgba(0, 122, 255, 0.4) 1px;
    color: ${props => props.theme.colors.lightBlue};
  }
`
