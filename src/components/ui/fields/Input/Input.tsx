import { FC, forwardRef, useEffect, useRef, useState } from 'react'
import styles from './Input.module.scss'
import { IInput } from '../fields.interface'





export const Input: FC = forwardRef<HTMLInputElement, IInput>(
	({  placeholder, error, type = 'text', style, ...rest }, ref) => {

		
		
		
		return (
			<article className={styles.root}>
				<div className={styles.wrapper} style={style}>
					<input
						required
						ref={ref}
						type={type}
						{...rest}
						className={styles.input}
					/>
					<label className={styles.label}>{placeholder}</label>
				</div>
				<div className={styles.wrapperError}>
					{error && <span className={styles.error}>{error.message}</span>}
				</div>
			</article>
		)
	}
)


Input.displayName = 'Input'


	
			
					