export interface WorkflowNode {
  id: string
  type: string
  position: {
    x: number
    y: number
  }
  data: {
    label: string
  }
}
