import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}

export default function OrderTotals({order} : OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total,item) => total + (item.quantity * item.price),0 ),[order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-xl">Total + Propina</h2>
            <p className="mb-0">Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
            <p className="mb-0">Propina: <span className="font-bold">$0</span></p>
            <p className="mb-0">Total a pagar: <span className="font-bold">$0</span></p>
        </div>
    </>
  )
}
