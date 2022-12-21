import Image from 'next/image'
import React, { FC } from 'react'
import { GalleryArr } from '../../../../pages/wedding-series'
import styles from './GalleryItem.module.scss'



export const GalleryItem: FC<GalleryArr> = ({ image, title, id }) => {
	return (
		<article className={styles.root}>
			<div className={styles.image}>
				<Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
			</div>
			<h4 className={styles.title}>{title}</h4>
		</article>
	)
}
