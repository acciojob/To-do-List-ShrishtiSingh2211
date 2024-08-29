//your code here
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input field, button, and the to-do list
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  // Add event listener to the 'Add todo' button
  addTodoBtn.addEventListener('click', function() {
    // Get the value of the input field and trim any leading/trailing whitespace
    const todoText = newTodoInput.value.trim();
    
    // Check if the input is not empty
    if (todoText !== '') {
      // Create a new list item element
      const li = document.createElement('li');
      
      // Set the text of the new list item to the input value
      li.textContent = todoText;
      
      // Append the new list item to the to-do list
      todoList.appendChild(li);
      
      // Clear the input field
      newTodoInput.value = '';
    } else {
      // Alert the user if the input is empty
      alert('Please enter a to-do item.');
    }
  });
});

