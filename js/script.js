{
  const tasks = []

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  function toggleTaskDone(taskIndex) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }

  function addTask(TaskContent) {
    tasks.push({ content: TaskContent });
    render();
  }

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, taskIndex)) => {
    removeButton.addEventListener("click", ( => {
      removeTask(taskIndex);
    }));
  };
};

const bindtoggleTaskDoneEvents = () => {
  const toggleTaskDoneButtons = document.querySelectorAll(".js-toggleTaskDone");

  toggleTaskDoneButtons.forEach((toggleTaskDoneButton, taskIndex)) => {
  toggleTaskDoneButton.addEventListener("click", () => {
    toggleTaskDone(taskIndex);
  });
};
};

const render = () => {
  let tasksListHTMLContent = "";

  for (const task of tasks) {
    tasksListHTMLContent += `
      <li class="tasks__item js-task">

     <button class="tasks__button tasks__button--done js-toggleTaskDone">${task.done ? "✓" : ""}</button>

<span class="tasks__content${task.done ? " tasks__content--done" : ""}">${task.content}</span>

<button class="tasks__button tasks__button--remove js-remove">🗑️</button>
</li >
  `;
  }

  document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;

  bindRemoveEvents();
  bindtoggleTaskDoneEvents();
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const taskElement = document.querySelector(".js-task");
  const taskContent = taskElement.value.trim();

  if (taskContent !== "") {
    addTask(taskContent);
    taskElement.value = "";
  }

  taskElement.focus();
};

const init = () => {
  render();

  const form = document.querySelector(".js-form");
  form.addEventListener("submit", onFormSubmit);
};

init();

};