import { FC, forwardRef } from 'react'
import { InputProps } from './InputLink.interface'
import styles from './InputLink.module.scss'


export const InputForLink: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, label, type = 'text', ...rest }, ref) => {
		return (
			<div className={styles.root}>
				<label>{label}</label>
				<input
					placeholder={placeholder}
					type={type}
					ref={ref}
					{...rest}
					className={styles.input}
				/>
			</div>
		)
	}
)
