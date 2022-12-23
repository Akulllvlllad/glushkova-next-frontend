import React, { FC } from 'react'
import styles  from './PanelLinks.module.scss'


type FastLinksProps = {
	links: {
		instagram: string
		vk: string
		phone: string
	}
}

export const FastLinks: FC<FastLinksProps> = ({ links }) => {
	const { instagram, vk, phone} = links
	return (
		<ul className={styles.root}>
			<li>
				<strong>Телефон: </strong>
				{phone}
			</li>
			<li>
				<strong>Instagram: </strong>
				{instagram}
			</li>
			<li>
				<strong>Vkontakte: </strong>
				{vk}
			</li>
		</ul>
	)
}
