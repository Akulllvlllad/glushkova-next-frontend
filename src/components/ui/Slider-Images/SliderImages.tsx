import React, { FC } from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import styles from './SliderImages.module.scss'
import Image from 'next/image'

type SliderImagesProps = {
	isOpen: boolean
	closeSliderImages: () => void

	imagePath: {
		id: string
		path: string
	}
}

export const SliderImages: FC<SliderImagesProps> = ({
	imagePath,
	closeSliderImages,

	isOpen,
}) => {
	console.log(imagePath)

	return (
		<Dialog className={styles.root} open={isOpen} onClose={() => null}>
			<Dialog.Panel className={styles.panel}>
				<div className={styles.img} >
					{imagePath?.path && (
						<Image
							src={imagePath.path}
							alt={imagePath.id}
							fill
							style={{ objectFit: 'contain' }}
							sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
						/>
					)}
				</div>

				
				<button onClick={closeSliderImages}>Cancel</button>
			</Dialog.Panel>
		</Dialog>
	)
}
