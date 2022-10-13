import { styled } from './theme'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Header = styled('header', {
  marginTop: '4rem',

  h1: {
    fontFamily: 'Peralta',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$white',

    '@bp1': {
      fontSize: '1.325rem',
    },

    '@bp2': {
      fontSize: '2rem',
    },
  },
})

export const HeaderAndFormSection = styled('section', {
  width: '100%',
  flex: 1,

  padding: '0 1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
})

export const FormBox = styled('main', {
  width: '100%',
  maxWidth: '650px',

  background: '$base-card',

  borderRadius: '12px',
  padding: '1.25rem',

  '@bp2': {
    padding: '2.5rem',
  },
})

export const Form = styled('form', {
  width: '100%',
  flex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const InputSection = styled('section', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const Footer = styled('footer', {
  width: '100%',
  marginBottom: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '0.5rem',

    fontFamily: 'Peralta',
  },

  p: {
    color: '$base-label',
  },
})
