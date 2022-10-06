import { ForwardRefRenderFunction, forwardRef, ForwardedRef } from 'react'
import { PatternFormatProps } from 'react-number-format'
import { NumberFormatValues } from 'react-number-format/types/types'
import { FieldError } from 'react-hook-form'

import { ErrorMessage, MaskInputContainer, StyledMaskInput } from './styles'

interface MaskInputProps {
  handleChange: (value: NumberFormatValues) => void
  error?: FieldError
  label?: string
}

type MaskInputType = MaskInputProps & Omit<PatternFormatProps, 'customInput'>

export const MaskInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  MaskInputType
> = ({ name, label, error, format, handleChange, ...props }, _ref) => {
  return (
    <MaskInputContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledMaskInput
        id={name}
        name={name}
        format={format}
        onValueChange={(values) => handleChange(values)}
        mask="_"
        displayType="input"
        valueIsNumericString
        getInputRef={(inputRef: ForwardedRef<HTMLInputElement>) => {
          _ref = inputRef
        }}
        isInvalid={!!error}
        {...props}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </MaskInputContainer>
  )
}

export const MaskInput = forwardRef(MaskInputBase)
