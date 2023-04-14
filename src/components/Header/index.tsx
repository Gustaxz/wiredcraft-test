import "../../styles/header.scss"

import { Bell, House, UserCircle } from "phosphor-react"
import { Search } from "./Search"
import { ImagesProps } from "../../types/images"

interface HeaderProps {
	setDisplayImages: React.Dispatch<React.SetStateAction<ImagesProps[] | undefined>>
}

export function Header({ setDisplayImages }: HeaderProps) {
	return (
		<header>
			<Search setDisplayImages={setDisplayImages} />
			<div className="icons">
				<House size={22} weight="fill" color="#8A8A8A" />
				<Bell size={22} weight="fill" color="#8A8A8A" />
				<UserCircle size={22} weight="fill" color="#8A8A8A" />
			</div>
		</header>
	)
}
