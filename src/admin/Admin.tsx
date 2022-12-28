import { useState } from 'react'
import { Header } from './components/Header'
import { MainAdmin } from './components/MainAdmin'

import styles from './scss/Admin.module.scss'

const adminPanel = [
	{ name: 'Галлереи', id: 0 },
	{ name: 'Услуги', id: 1 },
	{ name: 'Обо мне', id: 2 },
	{ name: 'Слайдер', id: 3 },
]

export const Admin = () => {
	const [currentPage, setCurrentPage] = useState(0)

	const changePage = (num: number) => {
		setCurrentPage(num)
	}

	return (
		<div className={styles.root}>
			<Header
				options={adminPanel}
				changePage={changePage}
				currentPage={currentPage}
			/>
			<MainAdmin currentPage={currentPage} />
		</div>
	)
}
