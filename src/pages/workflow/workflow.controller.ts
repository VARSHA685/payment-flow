import { useCallback } from "react"
import { addEdge, Connection } from "reactflow"
import { WorkflowNode } from "../../types"

export const useWorkflowController = (nodes, setNodes, edges, setEdges) => {
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges]
  )

  const addNode = (newNode: WorkflowNode) => {
    setNodes((nds) => [...nds, newNode])
  }

  const removeNode = (nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId)) // Filter out the node to be deleted
  }

  return { onConnect, addNode, removeNode }
}
