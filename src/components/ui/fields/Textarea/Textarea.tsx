import { FC, forwardRef } from 'react'
import styles from './Textarea.module.scss'
import { TextareaProps } from './Textarea.interface'

export const Textarea: FC = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ placeholder, error, style, ...rest }, ref) => {
		return (
			<article className={styles.root}>
				<div className={styles.wrapper} style={style}>
					<textarea ref={ref} {...rest} className={styles.input} />
					<label className={styles.label}>{placeholder}</label>
				</div>
				<div className={styles.wrapperError}>
					{error && <span className={styles.error}>{error.message}</span>}
				</div>
			</article>
		)
	}
)

Textarea.displayName = 'Textarea'
