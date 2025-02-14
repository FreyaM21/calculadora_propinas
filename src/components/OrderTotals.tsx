import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total,item) => total + (item.quantity * item.price),0 ),[order])
    const tipAmount = useMemo( () => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo( () => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-xl">Total + Propina</h2>
            <p className="mb-0">Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
            <p className="mb-0">Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
            <p className="mb-0">Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
        </div>

        <button className="w-full bg-neutral-800 p-3 uppercase text-white font-bold mt-3 disabled:opacity-30 cursor-pointer" disabled={totalAmount === 0} onClick={placeOrder}>Guardar orden</button>
    </>
  )
}
