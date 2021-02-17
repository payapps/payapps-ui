import React from 'react'
import styled from 'styled-components'
import { LoadingSpinner } from '../Icons'
import { ButtonProps } from './Button.d'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Tertiary } from './Tertiary'

const TextContent = styled.div`
  transition: opacity 0.125s;
`

const Wrapper = styled.div`
  position: relative;
`

export const Button = ({ type = 'primary', loading = false, disabled = false, block = false, children, ...rest }: ButtonProps) => {

  const ComponentTypes = {
    primary: Primary,
    secondary: Secondary,
    tertiary: Tertiary,
  }

  const Component = ComponentTypes[type]
  const opacity = loading && !disabled ? 0 : 1
  const showSpinner = loading && !disabled

  return (
    <Component
      { ...rest }
      disabled={disabled}
      block={block}
    >
      <Wrapper>
        <TextContent style={{ opacity }}>{children}</TextContent>
        {showSpinner && <LoadingSpinner />}
      </Wrapper>
    </Component>
  )
}
