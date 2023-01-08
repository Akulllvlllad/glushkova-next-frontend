import styles from './Gallery.module.scss'
import { CreatingGallery } from '../../components/CreatingGallery/CreatingGallery'
import { MdCreateNewFolder, MdDelete, MdModeEdit } from 'react-icons/md'
import { useGallery } from './useGallery'
import cn from 'classnames'
export const Gallery = () => {

	const {
		deleteGallery,
		updateGallery,
		createGallery,
		closeDialog,
		galleryId,
		galleries,
		reloadGalleries,
	} = useGallery()
	
	
	return (
		<section>
			<div className={styles.creating}>
				<button className={styles.creating__button} onClick={createGallery}>
					<strong>Создать новую галлерею</strong> <MdCreateNewFolder />
				</button>
			</div>

			<div className={styles.galleries}>
				{galleries.map(gallery => (
					<article key={gallery._id} className={styles.item}>
						<div className={styles.body}>
							<div className={cn(styles.isPublicFalse, {[styles.isPublicTrue]: gallery.isPublic})}></div>
							<h2 className={styles.title}>
								{gallery.gallery || 'Без названия'}
							</h2>
						</div>

						<div className={styles.buttonGroup}>
							<button
								className={cn(styles.button, styles.buttonUpdate)}
								onClick={() => updateGallery(gallery._id)}
							>
								Редактировать
							</button>
							<button
								className={cn(styles.button, styles.buttonDelete)}
								onClick={() => deleteGallery(gallery._id)}
							>
								Удалить
							</button>
						</div>
					</article>
				))}
			</div>

			{!!galleryId && (
				<CreatingGallery
					reloadGalleries={reloadGalleries}
					isOpen={!!galleryId}
					closeDialog={closeDialog}
					galleryId={galleryId}
				/>
			)}
		</section>
	)
}
