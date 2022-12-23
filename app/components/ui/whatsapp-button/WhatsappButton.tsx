import React from 'react'
import styles from './WhatsappButton.module.scss'
import { RiWhatsappFill } from 'react-icons/ri'

export const WhatsappButton = () => {
	return (
		<article className={styles.root}>
			<a href='#' className={styles.button}>
				<RiWhatsappFill /> <strong>Напиши мне</strong>
			</a>
		</article>
	)
}
