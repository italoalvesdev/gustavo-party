import { keyframes, styled } from '../../styles/theme'

export const StyledButton = styled('button', {
  minHeight: '47px',
  width: '100%',

  background: '$brand-yellow',
  color: '$white',

  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: 1.6,

  borderRadius: '6px',
  border: 0,
  padding: '0.75rem 0.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textTransform: 'uppercase',
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    background: '$brand-yellow-dark',
    cursor: 'pointer',
  },
})

export const SpinContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const loadingSpin = keyframes({
  from: {
    transform: 'rotate(0turn)',
  },
  to: {
    transform: 'rotate(1turn)',
  },
})

export const Spin = styled('div', {
  display: 'inline-block',
  border: '2px solid $base-border-input',
  borderRadius: '50%',
  width: '1em',
  height: '1em',
  fontSize: '1rem',
  animation: `0.45s linear 0s infinite normal none ${loadingSpin}`,
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
})
