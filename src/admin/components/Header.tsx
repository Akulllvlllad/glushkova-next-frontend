import React, { FC } from 'react'
import styles from '../scss/Header.module.scss'
import cn from 'classnames'

type THeaderProps = {
	options: { name: string; id: number }[]
	currentPage: number
	changePage: (num: number) => void
}

export const Header: FC<THeaderProps> = ({ options, currentPage, changePage }) => {
	return (
		<header className={styles.header}>
			{options.map(option => (
				<button
					key={option.id}
					onClick={() => changePage(option.id)}
					className={cn(styles.button, {
						[styles.current]: currentPage === option.id,
					})}
				>
					{option.name}
				</button>
			))}
		</header>
	)
}
