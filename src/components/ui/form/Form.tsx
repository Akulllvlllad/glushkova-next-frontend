import React from 'react'
import { Input } from '../fields/Input/Input'
import { Textarea } from '../fields/Textarea/Textarea'
import styles from './form.module.scss'


export const Form = () => {
	return (
		<form className={styles.root}>
			<div className={styles.col}>
				<Input placeholder='Имя*' />
				<Input placeholder='Ваш e-mail*' />
				<Input placeholder='События' />
				<Input placeholder='Дата' />
			</div>
			<div className={styles.col}>
				<Textarea placeholder='Сообщение' />
			</div>
			<div className={styles.buttonWrapper}>
				<button className={styles.button}>Отправить</button>
			</div>
		</form>
	)
}
