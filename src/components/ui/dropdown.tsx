import React from "react"

interface DropdownProps {
  options: string[]
  onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <select className="border rounded p-2 my-4" onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled>
        Select a Payment Provider
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
