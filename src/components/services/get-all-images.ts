import { api } from "../../libs/axios"
import { ImagesProps } from "../../types/images"

export class GetAllImages {
	private images: ImagesProps[] = []

	getImages() {
		return this.images
	}

	async setImages() {
		const { data } = await api.get("/")

		this.images = data
	}
}
