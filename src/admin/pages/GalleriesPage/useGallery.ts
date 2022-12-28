import { useState } from 'react'
import { useQuery } from 'react-query'
import { GalleryService } from '../../../service/gallery.service'
import { IGallery } from '../../../types/gallerty.interface'

export const useGallery = () => {
	const [galleries, setGalleries] = useState<IGallery[]>([])

	const { refetch } = useQuery(
		'get all galleries',
		() => GalleryService.getGalleries(),
		{
			onSuccess({ data }) {
				setGalleries(data)
			},
		}
	)

	const [galleryId, setGalleryId] = useState('')


	const reloadGalleries = () => {
		refetch()
	}

	const openDialog = (id: string) => {
		setGalleryId(id)
	}
	const closeDialog = () => {
		setGalleryId('')
	}

	const createGallery = async () => {
		try {
			await GalleryService.createNewGallery().then(({ data }) =>
				openDialog(data)
			)

			reloadGalleries()
		} catch (error) {
			closeDialog()
		}
	}

	const updateGallery = (id: string) => {
		openDialog(id)
	}

	const deleteGallery = async (id: string) => {
		try {
			await GalleryService.deleteGallery(id)
				.then(({ data }) => alert(data))
				.finally()
			closeDialog()
			reloadGalleries()
		} catch (error) {
			closeDialog()
		}
	}
	return {
		deleteGallery,
		updateGallery,
		createGallery,
		closeDialog,
		galleryId,
		galleries,
		reloadGalleries,
	}
}
