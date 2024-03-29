import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Album() {
	const [intermission, setIntermission] = useState(false)

	const album = useSelector((state) => state.radio.song.album)
	let list = useSelector((state) => state.continuousTimer.songList)

	useEffect(() => {
		if (list[0]) {
			if (list[0].intermission) {
				setIntermission(true)
			} else if (!list[0].intermission) {
				setIntermission(false)
			}
		}
	}, [list])

	return (
		<>
			{!intermission ? (
				<>
					{album && (
						<div className="radioInfoAlbum">
							{album.picture && (
								<div className="radioInfoAlbumLinkCont">
									<Link
										target="_blank"
										to={`/library/albums/${album.album_id}`}
										className="radioInfoAlbumLink">
										<img
											className="radioInfoAlbumPic hoverOpacity"
											src={`https://s3.amazonaws.com/pictures.organlive.com/large/${album.picture}`}
											alt={album.album}
										/>
									</Link>
								</div>
							)}
							<div className="radioInfoAlbumInfoContainer">
								<Link
									target="_blank"
									to={`/library/albums/${album.album_id}`}
									className="radioInfoAlbumLink">
									<h4 className="radioInfoAlbumTitle hoverOpacity">
										{album.album} ({album.albumyear})
									</h4>
								</Link>
								<div className="radioInfoAlbumInfoBttnContainer">
									{album.buycd && (
										<div>
											<a
												href={album.buycd}
												target="_blank"
												className="radioInfoAlbumBttn hoverOpacity"
												rel="noreferrer">
												Buy CD
											</a>
										</div>
									)}
									{album.buymp3album && (
										<div>
											<a
												href={album.buymp3album}
												target="_blank"
												className="radioInfoAlbumBttn hoverOpacity"
												rel="noreferrer">
												Buy MP3 Album
											</a>
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</>
			) : (
				<p className="radioInfoIntermission">Intermission</p>
			)}
		</>
	)
}
