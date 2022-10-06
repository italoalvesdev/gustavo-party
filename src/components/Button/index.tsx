import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Spin, SpinContainer, StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  children?: ReactNode
}

export function Button({
  name,
  type,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton id={name} name={name} type={type} {...props}>
      {isLoading ? (
        <SpinContainer>
          <Spin />
        </SpinContainer>
      ) : (
        children
      )}
    </StyledButton>
  )
}
