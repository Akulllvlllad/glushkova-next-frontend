import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import styles from './SliderImages.module.scss'
import Image from 'next/image'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Slider from 'react-slick'
import { GalleryImage } from '../../../../pages/p/[id]'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type SliderImagesProps = {
	isOpen: boolean
	closeSliderImages: () => void
	currentImage: number
	imageArr: GalleryImage[]
}

export const SliderImages: FC<SliderImagesProps> = ({
	currentImage,
	imageArr,
	closeSliderImages,
	isOpen,
}) => {
	const [settings, setSettings] = useState({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		fade: screen.availWidth < 700 ? false : true,
		initialSlide: currentImage,
	})

	
	return (
		<Dialog className={styles.root} open={isOpen} onClose={() => null}>
			<Dialog.Panel className={styles.panel}>
				<AiOutlineArrowLeft
					className={'slider__svg-arrow slider__svg-arrow-prev '}
				/>
				<Slider {...settings} className='slider'>
					{imageArr.map((image, i) => (
						<div className={styles.img} key={image.id}>
							<Image
								src={image.path}
								alt={'slide images'}
								fill
								style={{ objectFit: 'contain' }}
							/>
						</div>
					))}
				</Slider>
				<AiOutlineArrowRight
					className={'slider__svg-arrow slider__svg-arrow-next'}
				/>
				<button onClick={closeSliderImages} className={styles.close}>
					<MdOutlineClose />
				</button>
			</Dialog.Panel>
		</Dialog>
	)
}
