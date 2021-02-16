import React, { useEffect, useState } from 'react'
import { LoadingSpinner, Tick } from '../Icons'
import { ButtonProps } from './Button.d'
import { StyledButton } from './Styles'

const insert = (cond: any, ...value: any) => cond ? [value] : [] 

export const Button = ({ type = 'primary', loading = false, disabled = false, block = false, children, ...rest }: ButtonProps) => {
  const [loadingStatus, setLoadingStatus] = useState<{ progress: null | string }>({ progress: null })

  const PENDING = 'PENDING';
  const SUCCESS = 'SUCCESS'
  const BTTN_TYPE = `pa-button--${type}`

  const CLASS_LIST = [
    'pa-button',
    BTTN_TYPE,
    insert(loadingStatus.progress, 'pa-button--loading'),
    insert(loadingStatus.progress === PENDING, 'pa-button--loading-pending'),
    insert(loadingStatus.progress === SUCCESS, 'pa-button--loading-success'),
    insert(disabled, 'pa-button--disabled'),
    insert(block, 'pa-button--block')
  ].join(' ')

  useEffect(() => {
    const isPending = (loading && !loadingStatus.progress) || (loading && loadingStatus.progress === SUCCESS) ? PENDING : false;
    const isSuccess = !loading && loadingStatus.progress === PENDING ? SUCCESS : false;
    const progressState = isPending || isSuccess || null;
    const handleStateUpdate = (progress: string | null) => (progress && !disabled ? setLoadingStatus({ progress }) : false)
    handleStateUpdate(progressState)
  }, [loading, loadingStatus.progress, disabled])

  const Status = () => {
    const C = loadingStatus.progress === PENDING ? LoadingSpinner : Tick
    const CL = `pa-button__loading-${loadingStatus.progress === PENDING ? 'spinner' : 'success'}`
    return (
      <>
        { loadingStatus.progress &&
          <C className={`${CL} pa-button__loading-indicator`} /> }
      </>
    )
  }

  return (
    <StyledButton
      className={CLASS_LIST}
      buttonTheme={type}
      { ...rest }
      disabled={disabled}
    >
      <div className='pa-button__inner-wrapper'>
        <div className="pa-button__text-content">{children}</div>
        <Status />
      </div>
    </StyledButton>
  )
}


