import { Dispatch } from 'redux'
import { galleryAPI } from '../api/gallery-api'
import { initializeItems, deleteItem } from '../api/gallery-api'
import { InferActionsTypes } from '../redux/store'
import { ItemPropsType } from '../types/types'

const GET_ITEM = 'GAL/GET_ITEM'

let initialState = {
    item: '' as Array<ItemPropsType> | string
}

const galleryReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case GET_ITEM: {
            return {
                ...state,
                item: action.item
            }
        }

        default: return state
    }
}

type ActionsType = InferActionsTypes<typeof actions>


export const actions = {
    getItem: (item: ItemPropsType) => ({ type: GET_ITEM, item } as const)

}

export const setGalleryItem = (item: ItemPropsType) => async (dispatch: Dispatch<ActionsType>) => {
    let resp = await galleryAPI.setItem(item)
    dispatch(actions.getItem(resp))
}


export const galleryInitializing = () => (dispatch: Dispatch<ActionsType>) => {

    initializeItems().then(res => {
        dispatch(actions.getItem(res))
    })
}

export const deleteGalleryItem = (id: string) => (dispatch: Dispatch<ActionsType>) => {
    deleteItem(id).then(res => {
        dispatch(actions.getItem(res))
    })
}

export default galleryReducer