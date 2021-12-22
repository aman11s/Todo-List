const addTodosForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const todoHtmlTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class='bx bxs-trash delete'></i>
    </li>`
    list.innerHTML += html;
}

addTodosForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodosForm.add.value.trim();
    if(todo.length) {
        todoHtmlTemplate(todo);
        addTodosForm.reset();
    }
});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});