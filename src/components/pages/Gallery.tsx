import { FC } from 'react'
import { IGallery } from '../../types/gallerty.interface'
import { Dashboard } from '../Dashbord/Dashboard'
import { Section } from '../ui/Section'

export const Gallery: FC<{ gallery: IGallery }> = ({ gallery }) => {
	console.log(gallery )
	
	return (
		<Dashboard>
			<Section className='Gallery'>
				{/* <div className='grid-gallery'>
					{desc.length > 0 &&
						desc.map((image, index) => (
							<article key={image} className='grid-gallery__item'>
								<div
									onClick={() => chooseImage(index)}
									className='grid-gallery__img'
								>
									<Image
										src={image}
										alt={image}
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

				<NavigationGallery /> */}
			</Section>
			{/* <SliderImages
				currentImage={currentImage}
				imageArr={desc}
				isOpen={isOpen}
				closeSliderImages={closeSliderImages}
			/> */}
		</Dashboard>
	)
}
