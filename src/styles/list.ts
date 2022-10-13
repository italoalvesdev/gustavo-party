import { styled } from './theme'

export const ListContainer = styled('div', {
  width: '100%',
  height: '100vh',

  gap: '1.5rem',
})

export const Header = styled('header', {
  paddingTop: '3rem',

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

export const GuestsList = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexDirection: 'column',
  color: '$white',
  marginTop: '1rem',

  ul: {
    listStyle: 'none',
  },
})

export const Table = styled('table', {
  width: '100%',
  maxWidth: '600px',

  borderColor: '#dee2e6',
  borderCollapse: 'collapse',

  th: {
    padding: '0.5rem',
    borderBottom: '1px solid #dee2e6',
  },

  td: {
    padding: '0.5rem',
    border: '1px solid #dee2e6',

    '&:last-child': {
      div: {
        display: 'flex',
        justifyContent: 'space-evenly',

        button: {
          background: 'transparent',
          border: 0,
        },
      },

      svg: {
        color: '$brand-yellow',
        verticalAlign: 'middle',
        cursor: 'pointer',
        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',

        '&:hover': {
          opacity: '0.7',
        },
      },
    },
  },
})
