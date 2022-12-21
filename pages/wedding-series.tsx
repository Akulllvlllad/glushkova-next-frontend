import { Dashboard } from '../app/components/Dashbord/Dashboard'
import { TitlePage } from '../app/components/ui/title/TitlePage'

import img1 from '../app/assets/image/look.com.ua-119261.jpg'
import img2 from '../app/assets/image/look.com.ua-119414.jpg'
import img3 from '../app/assets/image/look.com.ua-120051.jpg'
import img4 from '../app/assets/image/look.com.ua-124887.jpg'
import img5 from '../app/assets/image/look.com.ua-129159.jpg'
import img6 from '../app/assets/image/look.com.ua-142516.jpg'
import img7 from '../app/assets/image/look.com.ua-66330.jpg'
import img8 from '../app/assets/image/look.com.ua-66393.jpg'
import { StaticImageData } from 'next/image'
import { GalleryItem } from '../app/components/ui/gallery-item/GalleryItem'
import { Section } from '../app/components/ui/section'

export type GalleryArr = { id: string; title: string; image: StaticImageData }

const galleryArr: GalleryArr[] = [
	{ id: '1', title: 'Юля и Андрей', image: img1 },
	{ id: '2', title: 'Юля и Андрей', image: img2 },
	{ id: '3', title: 'Юля и Андрей', image: img3 },
	{ id: '4', title: 'Юля и Андрей', image: img4 },
	{ id: '5', title: 'Юля и Андрей', image: img5 },
	{ id: '6', title: 'Юля и Андрей', image: img6 },
	{ id: '7', title: 'Юля и Андрей', image: img7 },
	{ id: '8', title: 'Юля и Андрей', image: img8 },
]

export default function WeddingSeries() {
	return (
		<Dashboard>
			<TitlePage>ФОТОСЕРИИ</TitlePage>
			<Section className={'WeddingSeries'}>
				<div className='gallery'>
					{galleryArr.map(obj => (
						<GalleryItem key={obj.id} {...obj} />
					))}
				</div>
			</Section>
		</Dashboard>
	)
}
