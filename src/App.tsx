import { useEffect, useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { ImagesProps } from "./types/images"
import { GetAllImages } from "./components/services/get-all-images"

export const getAllImagesService = new GetAllImages()

function App() {
	const [displayImages, setDisplayImages] = useState<ImagesProps[]>()

	useEffect(() => {
		getAllImagesService.setImages().then(() => {
			const images = getAllImagesService.getImages()
			setDisplayImages(images)
		})
	}, [])

	return (
		<>
			<Header setDisplayImages={setDisplayImages} />
			<Container displayImages={displayImages} />
		</>
	)
}

export default App
