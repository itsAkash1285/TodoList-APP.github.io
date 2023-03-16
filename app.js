const app = {

    addTask: () => {
        const taskText = document.getElementById('newTask'),
            contentBox = document.getElementById('tasksholder'),
            taskCreator = document.createElement('div'),
            textBox = document.createElement('div'),
            deleteButton = document.createElement('button'),
            checkBox = document.createElement('input'),
            label = document.createElement('label');

        // protection against empty input
        if (taskText.value.length > 0) {
            taskCreator.className = 'task-box';
            textBox.innerHTML = taskText.value;
            textBox.className = 'textBox';
            contentBox.insertBefore(taskCreator, contentBox.childNodes[0]);
            taskText.value = '';                // clear input box

            //delete button
            deleteButton.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/10/23/56/cross-27168_1280.png)";
            deleteButton.addEventListener('click', function () {
                contentBox.removeChild(this.parentNode);
            });

            checkBox.type = "checkbox";
            checkBox.addEventListener('click', function () {
                app.manageCheckbox(this.parentNode);
            });
            //Append to Actual LIST
            label.appendChild(checkBox);
            taskCreator.appendChild(textBox);
            taskCreator.appendChild(label);
            taskCreator.appendChild(deleteButton);
            taskText.placeholder = 'Things to do';

        } else {
            app.warn();
        }
    },

    //filtering task using check box, sort accordinly if the task is completed or incomplete//


    filterTasks: (type) => {
        const container = document.getElementById('tasksholder'),
            checkBoxes = container.getElementsByTagName("input");
        app.showAllTasks();
        for (let i = 0; checkBoxes.length > i; i++) {
            if (checkBoxes[i].type === "checkbox" && checkBoxes[i].checked === type) {
                checkBoxes[i].parentNode.parentNode.style.display = 'none';
            }
        }
    },

    manageCheckbox: (label) => {
        if (label.childNodes[0].checked === true) {
            label.style.backgroundImage = 'url(https://w7.pngwing.com/pngs/697/297/png-transparent-checkbox-icon-checkbox-button-tick-box-angle-text-triangle-thumbnail.png)';
        } else {
            label.style.backgroundImage = 'none';
        }
    },
// filter button to show all the tasks when filtering is applied//
    showAllTasks: () => {
        const container = document.getElementById('tasksholder'),
            checkBoxes = container.getElementsByTagName("input");
        for (let i = 0; checkBoxes.length > i; i++) {
            checkBoxes[i].parentNode.parentNode.style.display = 'block';
        }
    },
// warning if empty task is added//
    warn: () => {
        const taskText = document.getElementById('newTask');
        taskText.placeholder = 'You can\'t add an empty task!';
        return false;
    },

};

