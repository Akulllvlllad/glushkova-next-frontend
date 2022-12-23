import  { FC } from 'react'
import styles from './Essay.module.scss'
type EssayProps = {
	description: {
		title: string
		text: string
	}
}


export const Essay: FC<EssayProps> = ({ description }) => {
	return (
		<div className={styles.root}>
			<h2 className={styles.title}>
				{description.title}
				<p className={styles.line}>/
					<span></span>
				</p>
			</h2>
			<p className={styles.text}>{description.text}</p>
		</div>
	)
}
