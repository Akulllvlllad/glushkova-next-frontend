import React, { FC } from 'react'
import styles from './ReactSlick.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image, { StaticImageData } from 'next/image'

const settings = {
	dots: true,
	infinite: true,

	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 2000,
	cssEase: 'linear',
	pauseOnHover: false,
}

export const ReactSlick: FC<{ arr: StaticImageData[] }> = ({ arr = [] }) => {
	return (
		<div className={styles.root}>
			<Slider {...settings} className='main-slider'>
				{arr.map(img => (
					<div key={String(img)} className={styles.slide}>
						<Image
							src={img}
							alt={String(img)}
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}
