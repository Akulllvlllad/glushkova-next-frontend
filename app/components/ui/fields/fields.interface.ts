import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder?: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IInput extends TypeInputPropsField {}


type TypeTextareaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextarea extends TypeTextareaPropsField {}