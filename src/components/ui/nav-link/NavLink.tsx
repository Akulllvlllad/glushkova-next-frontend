import Link from 'next/link'
import React, { FC } from 'react'
import { Navigate } from '../../Dashbord/Header/Header'

export const NavLink: FC<{ navigateList: Navigate[] }> = ({ navigateList }) => {
	return (
		<ul className='nav__list nav__list_main'>
			{navigateList.map((obj, index) =>
				obj.type === 'link' ? (
					<li key={index} className='nav__item nav__item_main'>
						<Link href={obj.to as string} className='nav__link nav__link_main '>
							{obj.title}
						</Link>
					</li>
				) : (
					<li key={index} className='nav__dot nav__dot_main'>
						•
					</li>
				)
			)}
		</ul>
	)
}
