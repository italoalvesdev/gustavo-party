import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

import { ErrorMessage, InputContainer, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest },
  ref,
) => {
  return (
    <InputContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledInput
        id={name}
        name={name}
        ref={ref}
        isInvalid={!!error}
        {...rest}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
