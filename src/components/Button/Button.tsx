import React from 'react'
import styled from 'styled-components'
import { LoadingSpinner, Tick } from '../Icons'
import { ButtonProps } from './Button.d'
import { Primary } from './Primary'
import { Secondary } from './Secondary'
import { Tertiary } from './Tertiary'

const TextContent = styled.div`transition: opacity 0.125s;`
const Wrapper = styled.div`position: relative;`

export const Button = ({
  type = 'primary',
  loading = false,
  disabled = false,
  block = false,
  success,
  children,
  ...rest
}: ButtonProps) => {
  const ComponentTypes = {
    primary: Primary,
    secondary: Secondary,
    tertiary: Tertiary,
  }

  const Component = ComponentTypes[type]
  const isLoading = loading && !disabled
  const opacity = isLoading ? 0 : 1
  const status = isLoading && success ? 'success' : isLoading ? 'loading' : null
  const ButtonRequestStatus = status === 'success' ? Tick : LoadingSpinner

  return (
    <Component
      { ...rest }
      disabled={disabled}
      status={status}
      block={block}
    >
      <Wrapper>
        <TextContent style={{ opacity }}>{children}</TextContent>
        {status && <ButtonRequestStatus />}
      </Wrapper>
    </Component>
  )
}
