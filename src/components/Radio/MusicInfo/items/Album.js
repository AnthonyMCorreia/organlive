import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Album() {
	const album = useSelector((state) => state.radio.song.album)

	return (
		<div className="radioInfoAlbum">
			{album.picture && (
				<Link
					to={`/library/albums/${album.album_id}`}
					className="radioInfoAlbumLink">
					<img
						className="radioInfoAlbumPic hoverOpacity"
						src={`https://s3.amazonaws.com/pictures.organlive.com/large/${album.picture}`}
						alt={album.album}
					/>
				</Link>
			)}
			<div className="radioInfoAlbumInfoContainer">
				<Link
					to={`/library/albums/${album.album_id}`}
					className="radioInfoAlbumLink">
					<h4 className="radioInfoAlbumTitle hoverOpacity">
						{album.album} ({album.albumyear})
					</h4>
				</Link>
				{album.buycd && (
					<div>
						<a
							href={album.buycd}
							target="_blank"
							className="radioInfoAlbumBuyCD hoverOpacity"
							rel="noreferrer">
							Buy CD
						</a>
					</div>
				)}
			</div>
		</div>
	)
}
