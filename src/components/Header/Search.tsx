import { MagnifyingGlass } from "phosphor-react"
import "../../styles/header.scss"
import { ImagesProps } from "../../types/images"
import { getAllImagesService } from "../../App"

interface SearchProps {
	setDisplayImages: React.Dispatch<React.SetStateAction<ImagesProps[] | undefined>>
}

export function Search({ setDisplayImages }: SearchProps) {
	return (
		<div className="search">
			<MagnifyingGlass size={24} weight="light" color="#8A8A8A" />
			<input
				type="text"
				onChange={(e) => {
					if (e.target.value === "") {
						const images = getAllImagesService.getImages()
						setDisplayImages(images)
					} else {
						setDisplayImages((prev) => {
							if (prev) {
								return prev.filter((image) =>
									image.name.toLowerCase().includes(e.target.value.toLowerCase())
								)
							}
						})
					}
				}}
			/>
		</div>
	)
}
