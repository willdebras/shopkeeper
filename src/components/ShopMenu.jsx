/* eslint-disable react/prop-types */
import '../styles/ShopMenu.css'

import { mapping } from '../mapping.js'

import ShopItem from './ShopItem.jsx'

export default function ShopMenu({selectedModel, setSelectedModel}) {
    return <>
        <div className='shopWrapper'>
            <div className='shop'>
                {Object.keys(mapping).map(item => {
                    return (<ShopItem key={item} item={item} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />)
                })}
            </div>
        </div>
    </>
}