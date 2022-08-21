import {useRef} from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {setRadioSongInfoSelection} from '../../../state/ui'

import useClickOutside from '../../../customHooks/useClickOutside'

const setInfo = setRadioSongInfoSelection

export default function Menu({setMenuOpen}) {
    const dispatch = useDispatch()

    const ref = useRef(null)

    const infoSelected = useSelector((state) => state.ui.radioSongDisplayedInfo)

    const clickFunc = (e) => {
        e.preventDefault()
        dispatch(setInfo(e.target.innerHTML.toLowerCase()))
        setMenuOpen(false)
    }

    useClickOutside(ref, () => {
        setMenuOpen(false)
    })
    
    return  (
        <div className="radioInfoMenu" ref={ref}>
            <button className="radioInfoMenuItem" onClick={clickFunc}>
                Work
                </button>
            <button className="radioInfoMenuItem" onClick={clickFunc}>
                Album
                </button>
            <button className="radioInfoMenuItem" onClick={clickFunc}>
                Artist
                </button>
            <button className="radioInfoMenuItem" onClick={clickFunc}>
                Organ
                </button>
        </div>
    )
}