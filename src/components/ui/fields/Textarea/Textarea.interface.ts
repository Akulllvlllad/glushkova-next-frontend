import { TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder?: string
	error?: FieldError | undefined
}
