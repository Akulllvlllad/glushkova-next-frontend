import React, {
	ChangeEvent,
	FC,
	memo,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { useMutation, useQuery } from 'react-query'
import { GalleryService } from '../../../service/gallery.service'
import styles from './ImagesGallery.module.scss'
import Image from 'next/image'
import { Input } from '../../../components/ui/fields/Input/Input'
import { useDoor } from '../../../hooks/useDoor'
import { InputForLink } from '../inputLink/InputLink'
import { isLinkRegExp } from '../../../regExp/isLinkRegExp'

export const ImagesGallery: FC<{ galleryId: string }> = memo(
	({ galleryId }) => {
		const { isOpen, close, open, toggle } = useDoor()

		const [imagesLinks, setImagesLinks] = useState<string[]>([])

		const refetchImagesLinks = (data: string[]) => {
			setImagesLinks(data)
		}

		const { refetch } = useQuery(
			'getAllImages',
			() => GalleryService.getImagesFromGallery(galleryId),
			{
				onSuccess({ data }) {
					refetchImagesLinks(data)
				},
			}
		)




		const { mutateAsync } = useMutation(
			'pushImagesToGallery',
			(data: { galleryId: string; photo: string }) =>
				GalleryService.pushImagesToGallery(data.galleryId, data.photo)
		)

		const [photo, setPhoto] = useState('')
		const [photoError, setPhotoError] = useState(false)

		const uploadImages = () => {
			if (photoError) mutateAsync({ galleryId, photo })
			else alert('ошибка')
		}
		

		return (
			<div className={styles.root}>
				{isOpen ? (
					<div>
						<button onClick={uploadImages}>Отправить</button>
						<InputForLink
							label='https://'
							placeholder='Введите ссылку'
							value={photo}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPhoto(e.target.value)
							}
						/>

						{isLinkRegExp(photo) && (
							<div className={styles.photo}>
								<Image
									src={`https://${photo}`}
									alt={'фотография не найдена'}
									fill
									style={{ objectFit: 'cover' }}
									onError={e => setPhotoError(!e)}
									onLoadingComplete={e => setPhotoError(!!e)}
								/>
							</div>
						)}
					</div>
				) : (
					<div>
						<div>
							<button onClick={open}>Добавить фотографию</button>
						</div>
						<div className={styles.gallery}>
							{imagesLinks.map((img, i) => (
								<div key={img + i} className={styles.item}>
									<Image
										src={img}
										alt={String(img)}
										fill
										style={{ objectFit: 'cover' }}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		)
	}
)
