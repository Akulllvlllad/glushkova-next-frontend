import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GalleryService } from '../../src/service/gallery.service'
import { IGallery } from '../../src/types/gallerty.interface'
import { Gallery } from '../../src/components/pages/Gallery'
import { memo } from 'react'

const GalleryPage: NextPage<IGallery> = memo((props: IGallery) => {
	
	const pageExists = !Boolean(JSON.stringify(props) == '{}')
	
	return pageExists ? <Gallery {...props} /> : null
})

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const galleries = await GalleryService.getGalleries().then(
			({ data }) => data
		)
		const paths = galleries.map(gallery => ({
			params: {
				id: gallery._id,
			},
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const galleryId = String(params?.id)

		const { data: gallery } = await GalleryService.getGallery(galleryId)

		return {
			props: gallery,

			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default GalleryPage
