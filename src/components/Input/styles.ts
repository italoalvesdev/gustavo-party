import { styled } from '../../styles/theme'

export const InputContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  label: {
    width: '100%',

    color: '$white',
    fontSize: '1.5rem',
  },
})

export const StyledInput = styled('input', {
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

export const ErrorMessage = styled('span', {
  fontSize: '0.75rem',
  color: 'red',
})
