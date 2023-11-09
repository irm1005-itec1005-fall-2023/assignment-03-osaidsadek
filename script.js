// Data storage - Initialize the array of To Do items
const todoItems = [];

// Function to add a todo item
function addToDoItem(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    console.log('Error: Please provide a valid non-empty string for the todo item.');
    return;
  }

  const newToDo = {
    id: generateUniqueId(),
    text: text,
    completed: false,
  };

  todoItems.push(newToDo);
}

// Function to remove a todo item by ID
function removeToDoItem(todoId) {
  if (typeof todoId !== 'number' || todoId < 0) {
    console.log('Error: Please provide a valid positive number as the todo item ID.');
    return;
  }

  const index = findIndexById(todoId);
  if (index === -1) {
    console.log('Error: Todo item with the specified ID does not exist.');
    return;
  }

  todoItems.splice(index, 1);
}

// Function to mark a todo item as completed by ID
function markToDoItemAsCompleted(todoId) {
  if (typeof todoId !== 'number' || todoId < 0) {
    console.log('Error: Please provide a valid positive number as the todo item ID.');
    return;
  }

  const index = findIndexById(todoId);
  if (index === -1) {
    console.log('Error: Todo item with the specified ID does not exist.');
    return;
  }

  todoItems[index].completed = true;
}

// Function to delete a todo item by ID
function deleteToDoItem(todoId) {
  if (typeof todoId !== 'number' || todoId < 0) {
    console.log('Error: Please provide a valid positive number as the todo item ID.');
    return;
  }

  const index = findIndexById(todoId);
  if (index === -1) {
    console.log('Error: Todo item with the specified ID does not exist.');
    return;
  }

  todoItems.splice(index, 1);
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  for (let i = todoItems.length - 1; i >= 0; i--) {
    if (todoItems[i].completed) {
      todoItems.splice(i, 1);
    }
  }
}

// Helper function to generate a unique ID
function generateUniqueId() {
  // You can use a more sophisticated ID generation method
  return new Date().getTime();
}

// Helper function to find an item's index by ID
function findIndexById(id) {
  return todoItems.findIndex(todo => todo.id === id);
}

