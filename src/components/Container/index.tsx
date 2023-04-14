import { useEffect, useState } from "react"
import "../../styles/container.scss"
import { ImagesProps } from "../../types/images"
import { api } from "../../libs/axios"

import Box from "@mui/material/Box"
import { Masonry } from "@mui/lab"

interface ContainerProps {
	displayImages: ImagesProps[] | undefined
}

export function Container({ displayImages }: ContainerProps) {
	return (
		<Box>
			<Masonry
				columns={6}
				spacing={2}
				sx={{ marginTop: "1rem", marginRight: "auto", marginLeft: "auto" }}
			>
				{displayImages ? (
					displayImages.map((image) => (
						<img src={image.src} key={image._id} id={image.name} />
					))
				) : (
					<div>Nada foi encontrado</div>
				)}
			</Masonry>
		</Box>
	)
}
