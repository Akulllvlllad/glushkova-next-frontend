import React, { FC } from 'react'
import styles from './ServiceItem.module.scss'

type Service = {
	name: string
	price: string
	description: string
}

export const ServiceItem: FC<Service> = ({ name, price, description }) => {
	return (
		<article className={styles.root}>
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{name}</h3>
				<strong className={styles.price}>{price}</strong>
				<p className={styles.description}>{description}</p>
			</div>
		</article>
	)
}
