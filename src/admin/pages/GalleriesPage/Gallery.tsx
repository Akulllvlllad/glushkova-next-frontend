import styles from './Gallery.module.scss'

import { CreatingGallery } from '../../components/CreatingGallery/CreatingGallery'
import { MdCreateNewFolder, MdDelete, MdModeEdit } from 'react-icons/md'
import { useGallery } from './useGallery'

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
	console.log(galleries)
	
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
						<h2>{gallery.gallery || 'Без названия'}</h2>
						<div>
							<button onClick={() => deleteGallery(gallery._id)}>
								<MdDelete />
							</button>
							<button onClick={() => updateGallery(gallery._id)}>
								<MdModeEdit />
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
