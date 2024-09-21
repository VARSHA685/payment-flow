import React, { useState, useEffect } from "react"
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges
} from "reactflow"
import CustomNode from "../../components/nodes/customNode" // Import your custom node
import "reactflow/dist/style.css"
import { initialNodes, initialEdges } from "./workflow.data"
import { useWorkflowController } from "./workflow.controller"
import Toolbar from "../../components/ui/toolbar"

const nodeTypes = {
  custom: CustomNode // Register the custom node
}

const Workflow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [history, setHistory] = useState([{ nodes, edges }])
  const [future, setFuture] = useState([])

  const { onConnect, addNode } = useWorkflowController(nodes, setNodes, edges, setEdges)

  // Load workflow from local storage on component mount
  useEffect(() => {
    const savedWorkflow = localStorage.getItem("workflow")
    if (savedWorkflow) {
      const { nodes: loadedNodes, edges: loadedEdges } = JSON.parse(savedWorkflow)
      setNodes(loadedNodes)
      setEdges(loadedEdges)
      updateHistory(loadedNodes, loadedEdges) // Update history with loaded state
    }
  }, [])

  const handleAddNode = (provider: string) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: "custom",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: provider },
      style: { width: 150, height: 80 },
      draggable: true,
      resizable: true
    }

    const newNodes = [...nodes, newNode]
    updateHistory(newNodes, edges)
    addNode(newNode)
  }

  const updateHistory = (newNodes, newEdges) => {
    setHistory((prevHistory) => [...prevHistory, { nodes: newNodes, edges: newEdges }])
    setFuture([])
  }

  const saveWorkflow = () => {
    const workflowData = { nodes, edges }
    localStorage.setItem("workflow", JSON.stringify(workflowData))
    alert("Workflow saved!")
  }

  const loadWorkflow = () => {
    const savedWorkflow = localStorage.getItem("workflow")
    if (savedWorkflow) {
      const { nodes: loadedNodes, edges: loadedEdges } = JSON.parse(savedWorkflow)
      setNodes(loadedNodes)
      setEdges(loadedEdges)
      updateHistory(loadedNodes, loadedEdges)
      alert("Workflow loaded!")
    } else {
      alert("No saved workflow found.")
    }
  }

  const undo = () => {
    if (history.length > 1) {
      const current = history[history.length - 1]
      const previous = history[history.length - 2]

      setFuture((prevFuture) => [current, ...prevFuture])
      setNodes(previous.nodes)
      setEdges(previous.edges)
      setHistory((prevHistory) => prevHistory.slice(0, -1))
    }
  }

  const redo = () => {
    if (future.length > 0) {
      const next = future[0]
      setNodes(next.nodes)
      setEdges(next.edges)
      setHistory((prevHistory) => [...prevHistory, next])
      setFuture(future.slice(1))
    }
  }

  const onNodesChangeWrapper = (changes) => {
    const updatedNodes = applyNodeChanges(changes, nodes)
    updateHistory(updatedNodes, edges)
    setNodes(updatedNodes)
  }

  const onEdgesChangeWrapper = (changes) => {
    const updatedEdges = applyEdgeChanges(changes, edges)
    updateHistory(nodes, updatedEdges)
    setEdges(updatedEdges)
  }

  return (
    <div className="h-[70vh] bg-gray-100">
      <Toolbar
        onAddNode={handleAddNode}
        onUndo={undo}
        onRedo={redo}
        onSave={saveWorkflow}
        onLoad={loadWorkflow}
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChangeWrapper}
        onEdgesChange={onEdgesChangeWrapper}
        onConnect={(params) => {
          onConnect(params)
          updateHistory(nodes, edges)
        }}
        nodeTypes={nodeTypes}
        fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default Workflow
