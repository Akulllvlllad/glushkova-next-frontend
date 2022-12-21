import React from 'react'

type Navigate = {
	title?: string
	type: string
	to?: string
}

const logo = 'ЕКАТЕРИНА ГЛУШКОВА'

const navigateList: Navigate[] = [
	{ type: 'link', title: 'ПОРТФОЛИО', to: '#' },
	{ type: 'dot' },
	{ type: 'link', title: 'ЦЕНЫ', to: '#' },
	{ type: 'dot' },
	{ type: 'link', title: 'ФОТОСЕРИИ', to: '#' },
	{ type: 'dot' },
	{ type: 'link', title: 'БЛОГ', to: '#' },
	{ type: 'dot' },
	{ type: 'link', title: 'КОНТАКТЫ', to: '#' },
]



export const Header = () => {
	return (
		<>
			<header className='header header_main'>
				<div className='container header__container_main'>
					<div className='header__inner header__inner_main'>
						<div className='logo'>
							<a href='/' className='logo__title'>{logo}</a>
						</div>
						<nav className='nav nav_main'>
							<ul className='nav__list nav__list_main'>
								{navigateList.map((obj, index) =>
									obj.type === 'link' ? (
										<li key={index} className='nav__item nav__item_main'>
											<a href={obj.to} className='nav__link nav__link_main '>
												{obj.title}
											</a>
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

			<header className='header header_fixed'>
				<div className='container header__container'>
					<div className='header__inner'>
						<nav className='nav'>
							<ul></ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}
