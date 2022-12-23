import React, { FC } from 'react'
import styles from './ExtraInfo.module.scss'

export const ExtraInfo: FC<{ ExtraInfo: string }> = ({ ExtraInfo }) => {
	return (
		<article className={styles.root}>
			<div className={styles.wrapper}>
				<h3 className={styles.title}>Дополнительная информация: </h3>
				<p className={styles.description}>{ExtraInfo}</p>
			</div>
		</article>
	)
}
