import { Dashboard } from '../app/components/Dashbord/Dashboard'
import { Section } from '../app/components/ui/section'
import Image from 'next/image'
import img1 from '../app/assets/image/look.com.ua-119261.jpg'
import { LinksPanel } from '../app/components/ui/linksPanel/LinksPanel'
import { FastLinks } from '../app/components/ui/panel-link/FastLinks'
import { Essay } from '../app/components/ui/essay/Essay'
import { Form } from '../app/components/ui/form/form'

const me = {
	image: img1,
	quote: 'Мне близки гармония и чувства в каждом кадре',
	fastLinks: {
		instagram: 'instagram.com/kate_domracheva',
		vk: 'vk.com/domrachevakate',
		phone: '+7-917-711-71-11',
	},

	description: {
		title: 'Привет!',
		text: 'Меня зовут Екаткринв Домрачева. Занимаюсь фотографией больше 8 лет. В своих фотографиях Я стремлюсь совместить чистоту кадра и эмоциональность момента. В 2018 году стала финалистом конкурса журнала WEDDING  - "WEDDING AWARDS".  Естественность, красота, искренняя радость, моменты, когда мы чувствуем себя красивыми и любимыми, семья, которая рядом с нами, объятия друзей, смех и слезы радости — чаще всего нам хочется остановить именно эти мгновения нашей жизни и именно их хочется вспоминать долго. Я фотограф-романтик, влюбленный в естественный солнечный свет. Мне близки гармония и чувства в кадре. В фотографии больше всего ценю воздух, естественность и красивые детали. Люблю видеть в кадре счастливых и гармоничных людей, их доброту, красоту, чувственность и нежность.  Если Вы разделяете мои представления и Вам нравятся мои фотографии, то Я с радостью помогу сохранить в памяти Ваш неповторимый день! '
	}
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

						<div className='me__contacts'>
							<FastLinks links={me.fastLinks} />
							<LinksPanel links={links} prefix={'_me'} />
						</div>
					</div>
				</div>
				<div className='me__'>
					<Essay description={me.description} />
					<Form />
					
				</div>
			</Section>
		</Dashboard>
	)
}
