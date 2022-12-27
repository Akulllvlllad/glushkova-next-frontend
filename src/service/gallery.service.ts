import {axiosClassic} from '../axios/axios'
import { IGallery } from '../types/gallerty.interface'





export const GalleryService = {
	async getAllPagesGallery() {
		return axiosClassic.get<string[]>(`/gallery/all-page`)
	},
	async getGalleries() {
		return axiosClassic.get<IGallery[]>(`/gallery`)
	},
	async getGallery(id: string) {
		
		
		return axiosClassic.get<IGallery>(`/gallery/${id}`)
	},
} 