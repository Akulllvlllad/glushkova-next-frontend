import React from 'react'
import styles  from './PanelLinks.module.scss'
export const PanelLinks = () => {
	return (
		<ul className={styles.root}>
			<li>
				<strong>Телефон: </strong>
			</li>
			<li>
				<strong>Instagram: </strong>
			</li>
			<li>
				<strong>Vkontakte: </strong>
			</li>
		</ul>
	)
}
