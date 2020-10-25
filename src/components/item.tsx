import React from 'react'
import style from '../css/gallery.module.css'
import { ItemPropsType } from '../types/types'


type PropsType = {
    item: ItemPropsType
    deleteGalleryItem: (title: string) => void
}

const Item: React.FC<PropsType> = (props) => {

    let imgData = props.item.img
    let newImg = new Image()
    newImg.src = imgData

    return <div className={style.gallery__item}>

        <div>
            <img alt='img' src={props.item.img} />
        </div>

        <div>
            <a href={props.item.img} download={props.item.img} >Download</a>
            <span className={style.itemText__first}>
                Title: <span className={style.itemText__second}> {props.item.title} </span>
            </span>
            <span className={style.itemText__first}>
                Description: <span className={style.itemText__second}>{props.item.descr}  </span>
            </span>
            <span className={style.itemText__first}>
                Name: <span className={style.itemText__second}>{props.item.name} </span>
            </span>
            <span className={style.itemText__first}>
                Size: <span className={style.itemText__second}>{props.item.size} byte </span>
            </span>
            <span className={style.itemText__first}>
                Type: <span className={style.itemText__second}>{props.item.type}</span>
            </span>
            <span className={style.itemText__first}>
                Width: <span className={style.itemText__second}>{newImg.width} pixels</span>
            </span>
            <span className={style.itemText__first}>
                Height: <span className={style.itemText__second}>{newImg.height} pixels</span>
            </span>
            <button onClick={
                () => { props.deleteGalleryItem(props.item.title) }
            }>Delete</button>

        </div>
    </div>
}
export default Item