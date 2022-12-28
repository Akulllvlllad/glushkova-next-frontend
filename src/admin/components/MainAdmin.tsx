import { FC } from 'react'
import { Gallery } from '../pages/GalleriesPage/Gallery'
import styles from '../scss/Main.module.scss'

export const MainAdmin: FC<{ currentPage: number }> = ({ currentPage }) => {
	return (
		<main className={styles.main}>
			{currentPage === 0 ? (
				<Gallery />
			) : currentPage === 1 ? (
				<>Услуги</>
			) : currentPage === 2 ? (
				<>Обо мне</>
			) : currentPage === 3 ? (
				<>Слайдер</>
			) : null}
		</main>
	)
}
