import Link from 'next/link'
import React from 'react'
import cn from 'classnames'
import { useInViewOne } from '../../../hooks/useInViewOne'


type Navigate = {
	title?: string
	type: string
	to?: string
}

const logo = 'ЕКАТЕРИНА ГЛУШКОВА'

const navigateList: Navigate[] = [
	{ type: 'link', title: 'ПОРТФОЛИО', to: 'wedding-series' },
	{ type: 'dot' },
	{ type: 'link', title: 'ЦЕНЫ', to: 'services' },
	{ type: 'dot' },
	{ type: 'link', title: 'БЛОГ', to: '#' },
	{ type: 'dot' },
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
							<ul className='nav__list nav__list_main'>
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
						</nav>
					</div>
				</div>
			</header>

			<header className={cn('header', 'header_fixed', { active: !inView })}>
				<div className='container header__container'>
					<div className='header__inner'>
						<nav className={cn('nav', 'nav_main', { active: isView })}>
							<ul className='nav__list nav__list_main'>
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
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}
