import { FC, useMemo, useState } from 'react'
import styles from './CreatingGallery.module.scss'
import { MdCreateNewFolder } from 'react-icons/md'
import { Dialog } from '@headlessui/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IGallery } from '../../../types/gallerty.interface'
import { Input } from '../../../components/ui/fields/Input/Input'
import Image from 'next/image'
import { useMutation, useQuery } from 'react-query'
import { GalleryService } from '../../../service/gallery.service'
import { Toggle } from '../../../components/ui/fields/toggle/Toggle'
import { ImagesGallery } from '../../ui/images-gallery/ImagesGallery'



type TCreatingGallery = {
	isOpen: boolean
	closeDialog: () => void
	galleryId: string
	reloadGalleries: () => void
}

export const CreatingGallery: FC<TCreatingGallery> = ({
	isOpen,
	closeDialog,
	galleryId,
	reloadGalleries,
}) => {
	const {} = useQuery(
		'get one gallery for update',
		() => GalleryService.getGallery(galleryId),
		{
			onSuccess({ data: res }) {
				const {
					bannerImage,
					beautifulTitle,
					data,
					date,
					gallery,
					location,
					titleImage,
					isPublic,
				} = res

				reset({
					bannerImage,
					beautifulTitle,
					data,
					date,
					gallery,
					location,
					titleImage,
					isPublic,
				})
			},
		}
	)

	const updateCurrentGallery = async (id: string, body: IGallery) => {
		
		try {
			await GalleryService.updateCurrentGallery(id, body)
			reloadGalleries()
		} catch (error) {}
	}

	const {
		register,
		handleSubmit,
		reset,
		watch,
		control,
		getValues,
		formState: { errors },
	} = useForm<IGallery>({
		defaultValues: useMemo(() => {
			return {
				bannerImage: '',
				beautifulTitle: '',
				data: [],
				date: '',
				gallery: '',
				location: '',
				titleImage: '',
				isPublic: false
			}
		}, [galleryId]),
	})

	const onSubmit: SubmitHandler<IGallery> = (data, e) => {
		e?.preventDefault()
		
		updateCurrentGallery(galleryId, data)
	}

	
	

	return (
		<Dialog open={isOpen} onClose={closeDialog} className={styles.dialog}>
			<Dialog.Panel className={styles.panel}>
				<Dialog.Title>{galleryId}</Dialog.Title>
				<form onSubmit={handleSubmit(onSubmit)}>
					<button type='submit'>submit</button>
					<Input placeholder='????????????????' {...register('gallery')} />
					<Input
						placeholder='???????????????? ????????????????'
						{...register('beautifulTitle')}
					/>
					<Input placeholder='????????' {...register('date')} />
					<Input placeholder='?????????? ????????????' {...register('location')} />

					<div className={styles.banner}>
						<div className={styles.input}>
							<Input placeholder='????????????' {...register('bannerImage')} />
							<button className={styles.button}>???????????????? </button>
						</div>
						<div className={styles.img}>
							{getValues('bannerImage') && (
								<Image
									src={getValues('bannerImage')}
									alt='my photo'
									fill
									style={{ objectFit: 'cover' }}
								/>
							)}
						</div>
					</div>

					<Controller
						control={control}
						name='isPublic'
						render={({ field: { value, onChange } }) => (
							<Toggle
								label={'???????????????? ????????'}
								isEnabled={!!value}
								setIsEnabled={() => {
									onChange(!value)
								}}
							/>
						)}
					/>
				</form>
				<div>
					<ImagesGallery galleryId={galleryId} />
				</div>
			</Dialog.Panel>
		</Dialog>
	)
}
