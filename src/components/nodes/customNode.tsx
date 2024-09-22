import React from "react"
import { Handle, NodeResizeControl } from "reactflow"

interface CustomNodeProps {
  id: string
  data: {
    label: string
    onDeleteNode: (id: string) => void
  }
}

const CustomNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  const { label, onDeleteNode } = data

  return (
    <div
      style={{
        border: "1px solid #777",
        padding: "10px",
        borderRadius: "5px",
        background: "white",
        position: "relative"
      }}>
      <Handle type="target" position="top" />
      <Handle type="target" position="left" />
      <div>{label}</div>
      <button
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => onDeleteNode(id)}>
        X
      </button>
      <Handle type="source" position="bottom" />
      <Handle type="source" position="right" />
      {/* Custom positioning for the resizing control */}
      <NodeResizeControl
        style={{
          position: "absolute", // Position it absolutely within the node
          top: 0, // Adjust the vertical position
          right: 10, // Adjust the horizontal position
          cursor: "nwse-resize", // Change cursor style on hover
          width: 10,
          height: 10
        }}
      />
    </div>
  )
}

export default CustomNode
