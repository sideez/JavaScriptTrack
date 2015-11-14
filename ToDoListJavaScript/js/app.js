// 4 P's of Problem Solving: Preperation, Plan, Perform, Perfect

/**** Preperation ****/

// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so that user can manage daily tasks.

/**** Plan ****/

// Add a new tasks
  // When the button is pressed
    // Create a new list item with the text from from #new-task
      // input (checkbox)
      // label
      // input (text)
      // button.edit
      // button.delete
      // Each elements, needs modified and appended
    

// Edit an existing task
  // When the edit button is pressed
    // if the class of the parent is .editmode
      // switch from .editmode
      // input value becomes the label's text
    // else
      // switch to .editmode
      // lable text become the input's value

    // Toggle .editmode on the parent

// Delete an existing task
  // when the delete button is pressed
    // remove the parent list item from the ul

// Mark a task as complete
  // when the checkbox is checked
    // append the task list item to the #completed-tasks

// Mark a task as incomplete
  // when the checkbox is unchecked
  // Append the task list item to the #incomplete-task

/**** Perform ****/

var taskInput = document.getElementById('new-task'); // #new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // .incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); // .completed-task

// New Task List Item
var createNewTaskElement = function(taskString) {
  
  // Create list item
  var listItem = document.createElement('li');
  // input (checkbox)
  var checkBox = document.createElement('input');
  // label
  var label = document.createElement('label');
  // input (text)
  var editInput = document.createElement('input');
  // button.edit
  var editButton = document.createElement('button');
  // button.delete
  var deletebutton = document.createElement('button');

  // Each elements, needs modifying
  checkBox.type = 'checkbox';
  editInput.type = 'text';
  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deletebutton.innerText = 'Delete';
  deletebutton.className = 'delete';
  label.innerText = taskString;
  
  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deletebutton);
  
  return listItem;
}

// Add a new tasks
var addTask = function() {
  // Validate input field to make sure it is not empty
  if (taskInput.value !== "" && taskInput.value !== " ") {
    console.log('Add task...');
    // Create a new list item with the text from from #new-task
    var listItem = createNewTaskElement(taskInput.value);
    
    // Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = '';
  } else {
    alert('Empty field, please enter a list item.');
  }
}    

// Edit an existing task
var editTask = function() {
  console.log('Edit task...');
  
  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');
  var containsClass = listItem.classList.contains('editMode');
  var editButton = this;
  
  // if the class of the parent is .editmode
  if(containsClass) {
    editButton.innerText = 'Edit'; // Text when in saved mode
    // switch from .editmode
    // input value becomes the label's text
    label.innerText = editInput.value;
  } else {
    editButton.innerText = 'Save'; // Text when in edit mode
    // switch to .editmode
    // lable text become the input's value
    editInput.value = label.innerText;
  }
  // Toggle .editmode on the list item
  listItem.classList.toggle('editMode');
}

// Delete an existing task
var deleteTask = function() {
  console.log('Delete task...');
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  // remove the parent list item from the ul
  ul.removeChild(listItem);
}

// Mark a task as complete
var taskCompleted = function() {
  console.log('Completed task...');
  // append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function() {
  console.log('Incompleted task...');
  // Append the task list item to the #incomplete-task
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

// Set the click handler on the addButton and bind to addTask function
// addEventListener is better then onclick as it will allow to allow more than one event handlers
addButton.addEventListener('click', addTask); 

// Bind task events to each list item in the completed and/or incomplete list
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log('Binding task events...');
  
  // select taskListItems's children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');
  
  // bind editTask to edit button
  editButton.onclick = editTask;
  
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  // bind checkboxEventHandler to checkbox
  checkBox.onchange = checkboxEventHandler;
}

// Cycle over incompletedTaskHolder ul list item
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  
  // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
  
}
  
// Cycle over completedTaskHolder ul list item
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  
  // bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
  
}



