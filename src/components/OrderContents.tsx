import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div className="space-y-3">
      {order.map( item => (
        <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-5 m-0">
          <div>
            <p className="text-lg">{item.name}: {formatCurrency(item.price)}</p>
            <p className="font-black mb-0">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
          </div>
          <button className="bg-red-700 h-8 w-8 rounded-full text-white font-black mb-0 cursor-pointer" onClick={() => removeItem(item.id)}>x</button>
        </div>
      ))}
    </div>
  )
}
