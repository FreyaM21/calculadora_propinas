import type { MenuItem } from "../types"

type MenuItemProp = {
    item: MenuItem,
    addItem: (item: MenuItem) => void //void indica que esta funcion no retorna nada
}

export default function MenuItem({item, addItem} : MenuItemProp){
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full cursor-pointer" onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
