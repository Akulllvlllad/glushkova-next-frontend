import  { FC } from 'react'
import {
	SlSocialVkontakte,
	SlSocialInstagram,
	SlSocialFacebook,
} from 'react-icons/sl'
import { SiTelegram } from 'react-icons/si'
import { RiLinksLine } from 'react-icons/ri'





export const LinksPanel: FC<{ links: { type: string; link: string }[]; prefix?: string }> = ({
	links,
	prefix,
}) => {
	return (
		<ul className={`contact__links links_${prefix}`}>
			{links.map(link => (
				<a
					key={link.type}
					href={link.link}
					className='contact__link tr-opacity'
				>
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
	)
}
