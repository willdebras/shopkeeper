/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/ShopMenu.css'

import { mapping } from '../mapping.js'

export default function ShopItem({item, selectedModel, setSelectedModel}) {

    let handleClick = (item) => {
        setSelectedModel(item)
    }

    const modelMapping = mapping[item]

    let imageURL =  `url('./thumbnails/${modelMapping?.image}')`

    return <>
        <button className='shopButton' onClick={() => handleClick(item)}>
            <div className='shopItem' style={{backgroundImage: imageURL}}>
                <div className='shopItemTitle'>{modelMapping?.name}</div>
            </div>
        </button>
    </>
}