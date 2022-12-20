import { link } from 'fs'
import React from 'react'

import {
	SlSocialVkontakte,
	SlSocialInstagram,
	SlSocialFacebook,
} from 'react-icons/sl'
import { SiTelegram } from 'react-icons/si'
import { RiLinksLine } from 'react-icons/ri'

type Links = {
	type: string
	link: string
}

interface ContactData {
	title: string
	type: string
	data?: string
	links?: Links[]
}

const contactData: ContactData[] = [
	{ title: 'E-MAIL:', type: 'email', data: 'miakayuki@mail.ru' },
	{
		title: 'МОИ СОЦ. СЕТИ:',
		type: 'links',
		links: [
			{ type: 'vk', link: '#' },
			{ type: 'inst', link: '#' },
			{ type: 'fs', link: '#' },
			{ type: 'teleg', link: '#' },
		],
	},
	{ title: 'АДРЕС:', type: 'address', data: 'Москва, Россия' },
	{ title: 'ТЕЛЕФОН:', type: 'tel', data: '+7 (917) 711 71 11' },
]

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container footer__container'>
				<div className='footer__inner'>
					<div className='contacts'>
						<ul className='contacts__list'>
							{contactData.map(obj => (
								<li key={obj.title} className='contacts__item'>
									<div className='contact'>
										<h4>{obj.title}</h4>
										<div>
											{obj.type !== 'links' ? (
												obj.data
											) : (
												<ul className='contact__links'>
													{obj.links?.map(link => (
														<a href={link.link}>
															{link.type === 'vk' ? (
																<SlSocialVkontakte />
															) : link.type === 'inst' ? (
																<SlSocialInstagram />
															) : link.type === 'fs' ? (
																<SlSocialFacebook />
															) : link.type === 'teleg' ? (
																<SiTelegram />
															) : (
																<RiLinksLine />
															)}
														</a>
													))}
												</ul>
											)}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
