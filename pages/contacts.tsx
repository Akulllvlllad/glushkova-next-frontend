import { Dashboard } from '../app/components/Dashbord/Dashboard'
import { Section } from '../app/components/ui/section'
import Image from 'next/image'
import img1 from '../app/assets/image/look.com.ua-119261.jpg'
import { LinksPanel } from '../app/components/ui/linksPanel/LinksPanel'
import { PanelLinks } from '../app/components/panel-link/PanelLinks'



const me = {
	image: img1,
	quote: 'Мне близки гармония и чувства в каждом кадре',
	instagram: 'instagram.com/kate_domracheva',
	vk: 'vk.com/domrachevakate',
	phone: '+7-917-711-71-11',
	description: '',
}

const links = [
			{ type: 'vk', link: '#' },
			{ type: 'inst', link: '#' },
			{ type: 'fs', link: '#' },
			{ type: 'teleg', link: '#' },
		]

export default function Contacts() {
	return (
		<Dashboard>
			<Section className={'Contacts'}>
				<div className='me'>
					<div className='me__img'>
						<Image
							src={me.image}
							alt='my photo'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className='me__body'>
						<p className='me__quote'>
							<em>{me.quote}</em>
							 
							 
						</p>

						<PanelLinks />

						<LinksPanel links={links} prefix={'_me'} />
					</div>
				</div>
				<div className='essay'></div>
				<form></form>
			</Section>
		</Dashboard>
	)
}
