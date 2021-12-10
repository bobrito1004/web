window.addEventListener('load', () => {
    const form = document.querySelector('#task__form');
    const input = document.querySelector('#task__input');
    const box = document.querySelector('#tasks');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Пусто");
            return;
        }
        const task_box = document.createElement("div");
        task_box.classList.add("task");
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
                task_name.addEventListener('keydown', (e) =>{
                    if(e.key === 'Enter') {
                        edit_button.click()
                    }
                })
                task_buttons.removeChild(delete_button);
                task_name.focus();
                edit_button.innerText = "Сохранить";
            } else {
                task_name.setAttribute("readonly", "readonly");
                edit_button.innerText = "Изменить";
                task_buttons.appendChild(delete_button);
            }
        });
        delete_button.addEventListener('click', () => {
            box.removeChild(task_box);
        });
    });
});