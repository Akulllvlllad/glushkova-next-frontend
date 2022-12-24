import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Dashboard } from '../../src/components/Dashbord/Dashboard'
import { Section } from '../../src/components/ui/Section'
import Image, { StaticImageData } from 'next/image'
import { NavigationGallery } from '../../src/components/ui/navigation-gallery/NavigationGallery'
import { SliderImages } from '../../src/components/ui/Slider-Images/SliderImages'

type GalleryImage = {
	id: string
	path: string
}

const gallery = [
	{
		id: '1',
		title: 'one',
		galleryImage: [
			{
				id: '2',
				path: 'https://i.pinimg.com/236x/d5/08/8c/d5088c7e4970c1635901d0ddbf940673.jpg',
			},
			{
				id: '3',
				path: 'https://i.pinimg.com/236x/2e/33/27/2e3327b1d69c0d4c3c5446a075db9d23.jpg',
			},
			{
				id: '4',
				path: 'https://i.pinimg.com/236x/e9/91/d2/e991d24cb23502dd773879922953ac36.jpg',
			},
			{
				id: '6',
				path: 'https://i.pinimg.com/236x/1b/12/c4/1b12c4dc9c2b31b92f9bbc2941e89dc2.jpg',
			},
			{
				id: '5',
				path: 'https://i.pinimg.com/236x/32/ad/68/32ad68c05aba3d902fc10897dfa10b75.jpg',
			},
			{
				id: '8',
				path: 'https://i.pinimg.com/564x/12/5c/5f/125c5fe8f33e5c58b9a29357d5aea166.jpg',
			},

			{
				id: '7',
				path: 'https://i.pinimg.com/236x/e9/60/1e/e9601e620812df631ca48c21669e44cc.jpg',
			},
		],
	}
]

export default function Gallery() {
	const router = useRouter()
	const { id } = router.query
	const [desc, setDesc] = useState<GalleryImage[]>([])
	const [currentPage, setCurrentPage] = useState<string | null>(null)

	useEffect(() => {
		if (!router.isReady) return

		gallery.map(item => {
			if (item.id === id) {
				setCurrentPage(item.id)
				setDesc(item.galleryImage)
			}
		})
	}, [router.query.id, router.isReady])

	const [isOpen, setIsOpen] = useState(false)
	const [currentImage, setCurrentImage] = useState(0)
	const closeSliderImages = () => {
		setIsOpen(false)
	}
	const openSliderImages = () => {
		setIsOpen(true)
	}

	const chooseImage = (index: number) => {
		setCurrentImage(index)
		openSliderImages()
	}
	
	if (!currentPage) return null

	return (
		<Dashboard>
			<Section className='Gallery'>
				<div className='grid-gallery'>
					{desc.length > 0 &&
						desc.map((image, index) => (
							<article key={image.id} className='grid-gallery__item'>
								<div
									onClick={() => chooseImage(index)}
									className='grid-gallery__img'
								>
									<Image
										src={image.path}
										alt={image.id}
										fill
										style={{ objectFit: 'cover' }}
										sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
									/>
								</div>
							</article>
						))}
				</div>

				<NavigationGallery />
			</Section>
			<SliderImages
				imagePath={desc[currentImage]}
				isOpen={isOpen}
				closeSliderImages={closeSliderImages}
			/>
		</Dashboard>
	)
}
