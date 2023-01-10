import { axiosClassic } from '../axios/axios'
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

	async createNewGallery() {
		return axiosClassic.post<string>(`/gallery`)
	},
	async deleteGallery(id: string) {
		return axiosClassic.delete<string>(`/gallery/${id}`)
	},
	async updateCurrentGallery(id: string, body: IGallery) {
		return axiosClassic.patch<string>(`/gallery/${id}`, body)
	},

	async getImagesFromGallery(id: string) {
		return axiosClassic.get<string[]>(`/gallery/get-image/${id}`)
	},

	async pushImagesToGallery(id: string, imageLink: string) {
		console.log(id + imageLink)
		
		return axiosClassic.post<string>(`/gallery/add-image/${id}`, {'https//' imageLink})
	},
}
