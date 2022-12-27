import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Dashboard } from '../../src/components/Dashbord/Dashboard'
import { Section } from '../../src/components/ui/Section'
import Image, { StaticImageData } from 'next/image'
import { NavigationGallery } from '../../src/components/ui/navigation-gallery/NavigationGallery'
import { SliderImages } from '../../src/components/ui/Slider-Images/SliderImages'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GalleryService } from '../../src/service/gallery.service'
import { useQuery } from 'react-query'
import { IGallery } from '../../src/types/gallerty.interface'
import { Gallery } from '../../src/components/pages/Gallery'


 function GalleryPage(props): NextPage<IGallery> {
		

		return <Gallery {...props} />
 }
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

		console.log(gallery)
		

		return {
			props:{ gallery},

			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				gallery: {}
			},
		}
	}
}


export default GalleryPage