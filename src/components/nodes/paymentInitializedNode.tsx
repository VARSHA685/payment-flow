import React from "react"
import { Handle, Position } from "reactflow"

const PaymentProviderNode = ({ data }: { data: any }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-md">
      <strong>{data.label}</strong>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  )
}

export default PaymentProviderNode
