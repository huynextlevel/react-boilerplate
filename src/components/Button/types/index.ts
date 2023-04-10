import { ButtonBaseProps } from '@mui/material'

export interface IButton extends ButtonBaseProps {
  children?: any
  text?: string
  className?: string
  isLoading?: boolean
  loadingColor?: string
  size?:
    | 20
    | 40
}