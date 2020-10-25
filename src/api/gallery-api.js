import Dexie from "dexie"

const db = new Dexie("ReactDexie");

db.version(1).stores({
    items: "title, descr, img"
})
db.open().catch((err) => {
    console.log(err.stack || err)
})

export const initializeItems = async () => {
    let allItems = await db.items.toArray()
    return allItems
}

export const deleteItem = async (id) => {
    db.items.delete(id)
    let allPosts = await db.items.toArray()
    return allPosts
}

export const galleryAPI = {
    setItem(item) {
        let file = item.file[0]

        return new Promise(resolve => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                let itemImg = e.target.result
                let totalItem = {
                    title: item.title,
                    descr: item.descr,
                    img: itemImg,
                    name: file.name,
                    size: file.size,
                    type: file.type
                }
                db.items.add(totalItem).then(async () => {
                    let allItems = await db.items.toArray()
                    resolve(allItems)
                })
            }
        })
    }
}




