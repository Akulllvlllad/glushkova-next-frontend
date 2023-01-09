import React from 'react'
import cn from 'classnames'
import { useInViewOne } from '../../../hooks/useInViewOne'
import { NavLink } from '../../ui/nav-link/NavLink'
import { NavBurger } from '../../ui/nav-burger/NavBurger'

export type Navigate = {
	title?: string
	type: string
	to?: string
}

const logo = 'ЕКАТЕРИНА ГЛУШКОВА'

const navigateList: Navigate[] = [
	{ type: 'link', title: 'ПОРТФОЛИО', to: 'wedding-series' },
	{ type: 'link', title: 'ЦЕНЫ', to: 'services' },
	{ type: 'link', title: 'БЛОГ', to: '#' },
	{ type: 'link', title: 'КОНТАКТЫ', to: 'contacts' },
]



export const Header = () => {
	const { ref, inView, entry, isView } = useInViewOne()

	return (
		<>
			<header
				ref={ref}
				className={cn('header', 'header_main', { active: isView })}
			>
				<div className='container header__container_main'>
					<div className='header__inner header__inner_main'>
						<div className={cn('logo', { active: isView })}>
							<a href='/' className='logo__title'>
								{logo}
							</a>
						</div>
						<nav className={cn('nav', 'nav_main', { active: isView })}>
							<NavBurger navigateList={navigateList} />
							<NavLink navigateList={navigateList} />
						</nav>
					</div>
				</div>
			</header>

			<header className={cn('header', 'header_fixed', { active: !inView })}>
				<div className='container header__container'>
					<div className='header__inner'>
						<nav className={cn('nav', 'nav_main', { active: isView })}>
							<NavLink navigateList={navigateList} />
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}
