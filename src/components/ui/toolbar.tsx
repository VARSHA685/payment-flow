import React from "react"
import Dropdown from "./dropdown"

interface ToolbarProps {
  onAddNode: (provider: string) => void
  onUndo: () => void
  onRedo: () => void
  onSave: () => void
  onLoad: () => void
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onUndo, onRedo, onSave, onLoad }) => {
  const providers = ["Google Pay", "Stripe", "Apple Pay"]

  return (
    <div className="p-4 bg-gray-200 flex items-center">
      <h2 className="text-lg font-bold mr-4">Add Payment Provider</h2>
      <Dropdown options={providers} onSelect={onAddNode} />
      <button onClick={onUndo} className="ml-4 p-2 bg-blue-500 text-white rounded">
        Undo
      </button>
      <button onClick={onRedo} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Redo
      </button>
      <button onClick={onSave} className="ml-2 p-2 bg-green-500 text-white rounded">
        Save
      </button>
      <button onClick={onLoad} className="ml-2 p-2 bg-yellow-500 text-white rounded">
        Load
      </button>
    </div>
  )
}

export default Toolbar
