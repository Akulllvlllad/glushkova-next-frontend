
import { useQuery } from 'react-query'
import { GalleryService } from '../../../service/gallery.service'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'



export const useNavigation = () => {

	const {} = useQuery(
		'get galleries pages',
		() => GalleryService.getAllPagesGallery(),
		{
			onSuccess({ data }) {
				setGalleryPage(data)
			},
		}
	)

	const [galleryPage, setGalleryPage] = useState<string[]>([])

	const [indexPage, setIndexPage] = useState<null | number>(null)

	const router = useRouter()

	const { id } = router.query

	useEffect(() => {
		if (id) setIndexPage(galleryPage.indexOf(id as string))
	}, [router.query.id, router.isReady, galleryPage])

	const prevClick = () => {
		if (indexPage) router.push(`/p/${galleryPage[indexPage - 1]}`)
	}

	const nextClick = () => {
		if (indexPage || indexPage === 0)
			router.push(`/p/${galleryPage[indexPage + 1]}`)
	}



	return { prevClick, nextClick, galleryPage, indexPage }
	
	
}
