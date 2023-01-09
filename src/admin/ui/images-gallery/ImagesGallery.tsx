import React, { FC, memo, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { GalleryService } from '../../../service/gallery.service'
import styles from './ImagesGallery.module.scss'
import Image from 'next/image'

export const ImagesGallery: FC<{ galleryId: string }> = memo(
	({ galleryId }) => {
		const [isOpen, setIsOpen] = useState(false)

		const [imagesLinks, setImagesLinks] = useState<string[]>([])

		const refetchImagesLinks = (data: string[]) => {
			setImagesLinks(data)
			console.log(data)
		}

		const { refetch } = useQuery(
			'get all galleries',
			() => GalleryService.getImagesFromGallery(galleryId),
			{
				onSuccess({ data }) {
					refetchImagesLinks(data)
				},
			}
		)

		console.log(imagesLinks)

		return (
			<div className={styles.root}>
				{isOpen ? (
					<div></div>
				) : (
					<div>
						<div>
							<button>Добавить фотографию</button>
						</div>
						<div className={styles.gallery}>
							{imagesLinks.map((img, i) => (
								<div key={img + i} className={styles.item}>
									<Image
										src={img}
										alt={String(img)}
										fill
										style={{ objectFit: 'cover' }}
									/>

									{i}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		)
	}
)
