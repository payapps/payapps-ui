import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

export const Primary = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.lightBlue};
  border: solid ${props => props.theme.colors.lightBlue} 1px;
  color: ${props => props.theme.colors.white};
  &:hover {
    &:before {
      opacity: 1;
    }
  }
`

