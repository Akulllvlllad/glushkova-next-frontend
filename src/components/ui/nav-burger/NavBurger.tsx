import Link from 'next/link'
import React, { FC } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Navigate } from '../../Dashbord/Header/Header'
import style from './NavBurger.module.scss'

export const NavBurger: FC<{ navigateList: Navigate[] }> = ({ navigateList }) => {
	return (
		<div className={style.root}>
			<FaHamburger className={style.burger}/>
			<ul className={style.list}>
				{navigateList.map((obj, index) =>
					obj.type === 'link' ? (
						<li key={index} className='nav__item nav__item_main'>
							<Link
								href={obj.to as string}
								className='nav__link nav__link_main '
							>
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
		</div>
	)
}
