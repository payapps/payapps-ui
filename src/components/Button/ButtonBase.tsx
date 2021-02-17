import styled from 'styled-components'

export const ButtonBase = styled.button<{ block?: boolean }>`
  &[disabled] {
    background-color: ${props => props.theme.colors.xtraLightGrey};
    color: ${props => props.theme.colors.lightGrey};
    border: 1px solid rgba(182, 197, 206, 0.5);
    pointer-events: none;
  }

  display: inline-block;
  position: relative;
  height: ${props => props.theme.size(44)};
  padding: ${props => props.theme.size(12, 40, 12)};
  font-weight: 700;
  font-size: ${props => props.theme.size(18)};
  border-radius: ${props => props.theme.size(22)};
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 0.125s;

  ${props => (
    props.block ? (
      `
        width: 100%;
        & + & {
          margin-top: ${props.theme.size(16)};
        }
      `
    ) : (
      `
        width: auto;
        & + & {
          margin-left: ${props.theme.size(16)};
        }
      ` 
    )
  )}

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
