import { Link } from "react-router-dom"

export default function TrackItems({ val }) {
	return (
		<div className="searchItem">
			<p className="searchItemTitle">{val.title}</p>
			<Link className="searchItemLink" to={`/library/albums/${val.albumid}`}>
				<p className="searchItemAlbumText">{val.album}</p>
			</Link>
			<button className="searchItemRequestBttn">Request Song</button>
		</div>
	)
}

/*

{
"songid": "1",
"title": "LEMMENS: Fanfare in D major",
"album": "100th Anniversary Concert of Roosevelt Opus 113",
"albumid": "1",
"label": "",
"catalog": "",
"albumyear": "1983",
"picture": "",
"artist": "Earl Miller",
"artistID": "305",
"composer": "Jacques-Nicolas Lemmens",
"date_played": "2022-02-12 15:47:42",
"rating": "3.5",
"buyCD": null,
"buyMP3": null,
"pdfsheetmusic": "https://ks4.imslp.info/files/imglnks/usimg/9/9b/IMSLP130932-WIMA.1f0f-Lemmens_27_Fanfare.pdf#page=",
"buysheetmusic": "http://www.sheetmusicplus.com/title/3901073?aff_id=457717",
"organID": "130",
"trackrating": "3.5"
}

*/
