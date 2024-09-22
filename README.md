# Workflow Builder

A workflow builder built with ReactFlow that supports node resizing, undo/redo functionality, and validation.

## Setup Instructions

1. Clone the Repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>

   ```

2. Install Dependencies:
   npm i

3. Start the Development Server:
   npm run dev or npm start

Core Features :-

4. Node Resizing Implementation:
   Node resizing is enabled using the NodeResizeControl component from ReactFlow. Each node's resizable property is set to true, allowing users to resize nodes. The dimensions of each node are stored in the node's state to persist changes.

5. Undo/Redo Implementation:
   Undo/redo functionality is managed using two arrays: history and future. Every state change (such as node addition, deletion, or modification) is saved in the history array. When undo is triggered, the current state is moved to the future array while the previous state from history is restored. Redo moves the last undone state from future back to history.

6. Add Payment Provider Node Implementation:
   A dropdown menu allows users to add payment provider nodes (e.g., Google Pay, Stripe, Apple Pay) to the canvas.
   Once selected, the node is placed on the canvas at a random position with its label.

7. Delete Node Implementation:
   Each payment provider node includes a delete button (a red “X” icon).
   Clicking the delete button removes the node from the canvas, updating the workflow dynamically.

8. Drag and Drop Implementation:
   Nodes can be dragged and repositioned freely on the canvas.
   ReactFlow’s built-in drag functionality ensures smooth, real-time movement of nodes.

9. Node Resizing Implementation:
   Node resizing is enabled using the NodeResizeControl component from ReactFlow.
   Each node has a resizable property set to true, allowing users to increase or decrease the size of nodes.
   The system stores the dimensions to persist the resized state.

10. Zoom and Pan Implementation:
    Users can zoom in or out using the scroll wheel or zoom controls, implemented using the Controls component from ReactFlow.
    Panning is allowed for easy navigation, making it easier to manage larger workflows.
