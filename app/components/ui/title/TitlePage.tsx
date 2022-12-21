import React, { FC, ReactNode } from 'react'
import styles from './TitlePage.module.scss'


type TitlePageProps = {
	children: ReactNode
}


export const TitlePage: FC< TitlePageProps> = ({children }) => {
	return (
		<div className={styles.root}>
			<p className={styles.line}>/</p>
			<h1 className={styles.title}>{children}</h1>
			<p className={styles.line}>/</p>
		</div>
	)
}
