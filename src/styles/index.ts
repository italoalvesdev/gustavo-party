import { styled } from './theme'

export const MainContainer = styled('main', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',

  h1: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '$white',

    marginTop: '4rem',
  },
})

export const FormBox = styled('div', {
  width: '100%',

  borderRadius: '12px',

  padding: '2.5rem',
  background: '$base-card',
  maxWidth: '600px',
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
