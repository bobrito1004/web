function Create_Task(task_text) {
    let ID = localStorage.getItem('ID')
    localStorage.setItem(ID, task_text)
    Show(task_text, ID)
    localStorage.setItem('ID', (parseInt(ID) + 1).toString())
}

function Load_Task(task_text, ID) {
    Show(task_text, ID)
}

function Show(task_text, ID) {
    const task = task_text
    const task_box = document.createElement("div");
    task_box.classList.add("task");
    task_box.setAttribute('ID', ID)
    const task_content = document.createElement("div");
    task_content.classList.add("content");
    const task_name = document.createElement("input");
    task_name.classList.add("text");
    task_name.type = "text";
    task_name.value = task;
    task_name.setAttribute("readonly", "readonly");
    const task_buttons = document.createElement("div");
    task_buttons.classList.add("actions");
    const edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerHTML = "Изменить";
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerHTML = "Выполнено!";
    task_content.appendChild(task_name);
    task_box.appendChild(task_content);
    task_buttons.appendChild(edit_button);
    task_buttons.appendChild(delete_button);
    task_box.appendChild(task_buttons);
    box.appendChild(task_box);
    input.value = "";
    edit_button.addEventListener('click', () => {
        if (edit_button.innerText.toLowerCase() === "изменить") {

            task_name.removeAttribute("readonly");
            task_name.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    edit_button.click()
                }
            })
            task_buttons.removeChild(delete_button);
            task_name.focus();
            edit_button.innerText = "Сохранить";
        } else {
            let ID = task_box.getAttribute('ID')
            task_name.setAttribute("readonly", "readonly");
            localStorage.setItem(ID, task_name.value)
            edit_button.innerText = "Изменить";
            task_buttons.appendChild(delete_button);
        }
    });
    delete_button.addEventListener('click', () => {
        let ID = task_box.getAttribute('id')
        box.removeChild(task_box);
        localStorage.removeItem(ID)
        if (document.getElementsByClassName('task').length === 0) {
            localStorage.setItem('ID', '0')
        }
    });
}

const form = document.querySelector('#task__form');
const input = document.querySelector('#task__input');
const box = document.querySelector('#tasks');
//localStorage.clear()
if (localStorage.getItem('ID') === null) {
    localStorage.setItem('ID', '0')
}
//console.log(localStorage)
window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        if (!isNaN(parseInt(localStorage.key(i)))) {
            let txt = localStorage.getItem(localStorage.key(i))
            Load_Task(txt, localStorage.key(i));
        }
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Пусто");
            return;
        }
        Create_Task(task)
    });
});