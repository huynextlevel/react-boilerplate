import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  buttonContainer: {
    '&.Mui-disabled': {
      opacity: 0.5,
    },
    '&.MuiButton-root': {
      height: 40,
      maxHeight: 48,
      color: '#000',
      borderRadius: 2,
      display: 'flex',
      fontSize: '18px',
      minWidth: '100px',
      lineHeight: '24px',
      fontWeight: 'bold',
      padding: '0px 24px',
      alignItems: 'center',
      textTransform: 'none',
      backgroundColor: '#FFF',
      letterSpacing: '-0.02em',
      justifyContent: 'center',
      fontFamily: 'JetBrains Mono',
      '&:hover': {
        backgroundColor: '#FFF'
      }
    },
    '@media screen and (max-width: 900px)': {
      '&.MuiButton-root': {
        fontWeight: '400'
      }
    }
  }
}))
