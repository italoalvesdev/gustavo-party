import { PatternFormat } from 'react-number-format'
import { ErrorMessage as ErrorMessageBase } from '../Input/styles'

import { styled } from '../../styles/theme'

export const MaskInputContainer = styled('div', {})

export const StyledMaskInput = styled(PatternFormat, {
  width: '100%',
  padding: '0.75rem 0.875rem',
  borderRadius: '4px',

  background: '$base-input',
  border: `1px solid $base-border-input`,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '0.875rem',

  '&:focus': {
    outline: 'none',
    borderColor: '$brand-yellow-dark',
  },

  '&::placeholder': {
    fontSize: '0.875rem',
    color: '$base-label',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: 'red',
        '&:focus': {
          borderColor: 'red',
        },
      },
    },
  },
})

export const ErrorMessage = styled(ErrorMessageBase)
