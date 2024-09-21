import React from "react"
import { Handle, NodeResizeControl } from "reactflow"

const CustomNode = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid #777",
        padding: "10px",
        borderRadius: "5px",
        background: "white",
        position: "relative"
      }}>
      <Handle type="target" position="left" />
      <div>{data.label}</div>
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
