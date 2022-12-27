import styles from './NavigationGallery.module.scss'
import cn from 'classnames'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useNavigation } from './useNavigation'

export const NavigationGallery = () => {
	const { prevClick, nextClick, galleryPage, indexPage } = useNavigation()

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<button
					disabled={!!!indexPage}
					onClick={prevClick}
					className={cn(styles.prev, {
						[styles.hidden]: !!!indexPage,
					})}
				>
					<BsArrowLeft />
					Назад
				</button>
				<button
					onClick={nextClick}
					disabled={(indexPage as number) >= galleryPage.length - 1}
					className={cn(styles.next, {
						[styles.hidden]: (indexPage as number) >= galleryPage.length - 1,
					})}
				>
					Вперед
					<BsArrowRight />
				</button>
			</div>
		</div>
	)
}
