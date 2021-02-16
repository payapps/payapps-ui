// import React from 'react'
import styled, { css } from 'styled-components'

const primaryStyles = css`
  background-color: ${props => props.theme.colors.lightBlue};
  border: solid ${props => props.theme.colors.lightBlue} 1px;
  color: ${props => props.theme.colors.white};
`

const secondaryStyles = css`
  background-color: ${props => props.theme.colors.white};
  border: solid rgba(0, 122, 255, 0.4) 1px;
  color: ${props => props.theme.colors.lightBlue};
`

const buttonTypeStyles: {[key: string]: any} = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  // tertiary: tertiaryStyles,
}

export const StyledButton = styled.button<{ buttonTheme: string }>`
  ${(props) => buttonTypeStyles[props.buttonTheme]}
  display: inline-block;
  position: relative;
  height: size(44);
  padding: size(12) size(40) size(12);
  font-family: 'Roboto';
  font-weight: 700;
  font-size: size(18);
  border-radius: size(22);
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 0.125s;

  &:not(.pa-button--block) + &:not(.pa-button--block) {
    margin-left: size(16);
  }

  &.pa-button--block {
    display: block;
    width: 100%;
    & + & {
      margin-top: size(16);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    display: block;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    z-index: 0;
    transition: opacity $bttnColorTransitionTime;
    border-radius: inherit;
    mix-blend-mode: multiply;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: $lightBlue;
    color: $white;
    border: solid 1px $lightBlue;
    &:before {
      background: rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
  }

  .pa-button__inner-wrapper {
    position: relative;
  }

  .pa-button__text-content {
    transition: opacity 0.125s;
  }

  .pa-button__loading-indicator {
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%); 
  }

  .pa-button__loading-spinner {
    width: 1.05em;
    height: 1.05em;
  }

  &.pa-button--loading {
    .pa-button__text-content {
      opacity: 0;
    }
    &.pa-button--loading-success {
      color: $white;
      .pa-button__loading-success {
        display: block;
      }
    }
    &.pa-button--loading-pending {
      background-color: $lightBlue;
      color: $white;
      border: solid $lightBlue 1px;
      &:hover {
        &:before { opacity: 1 }
      }
      .pa-button__loading-spinner {
        display: block;
      }
    }
  }

  &.pa-button--loading-success {
    background-color: $green;
    border: solid $green 1px;
  }
`
