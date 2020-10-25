import React from 'react'
import style from '../css/gallery.module.css'
import Item from './item'
import { ItemPropsType } from '../types/types'

type ItemProps = {
    item: Array<ItemPropsType>
    deleteGalleryItem: (title: string) => void
}


const Items: React.FC<ItemProps> = (props) => {
    console.log(props.item)
    return <div className={style.items__main}>
        {props.item.map((item: any) => <Item deleteGalleryItem={props.deleteGalleryItem}
            key={item.title} item={item} />)}
    </div>

}
export default Items