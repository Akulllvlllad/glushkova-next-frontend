import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from './NavigationGallery.module.scss'

const data = ['1', '2', '3', '4']

export const NavigationGallery = () => {
	const [galleryPage, setGalleryPage] = useState<string[]>(data)

	const [indexPage, setIndexPage] = useState<null | number>(null)

	const router = useRouter()

	const { id } = router.query

	useEffect(() => {
		if (id) setIndexPage(galleryPage.indexOf(id as string))

		
	}, [router.query.id, router.isReady])

	const prevClick = () => {
		if (indexPage) router.push(`/p/${galleryPage[indexPage - 1]}`)
	}

	const nextClick = () => {
	if (indexPage || indexPage === 0) router.push(`/p/${galleryPage[indexPage + 1]}`)
	}



	
	
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<button
					disabled={!!!indexPage}
					onClick={prevClick}
					className={styles.prev}
				>
					Назад
				</button>
				<button
					
					onClick={nextClick}
					className={styles.next}
				>
					Вперед
				</button>
			</div>
		</div>
	)
}
