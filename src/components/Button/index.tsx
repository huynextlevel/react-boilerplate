import React from 'react'
import clsx from 'clsx'
import {
  Button,
  CircularProgress
} from '@mui/material'

import { IButton } from './types'
import { useStyles } from './styles'

const ButtonComponent: React.FC<IButton> = ({
  text,
  size = 20,
  children,
  className,
  isLoading,
  loadingColor,
  onClick
}) => {
  const classes = useStyles()

  return (
    <Button
      onClick={onClick}
      className={clsx(classes.buttonContainer, className)}
    >
      {isLoading ? (
        <CircularProgress
          size={size}
          style={{ color: loadingColor ? loadingColor : '#000' }}
        />
      ) : text !== undefined ? text : children}
    </Button>
  )
}

export default ButtonComponent
