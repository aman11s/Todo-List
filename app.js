const addTodosForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search input');

const todoHtmlTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class='bx bxs-trash delete'></i>
    </li>`
    list.innerHTML += html;
}

const filteredTodos = (searchTodo) => {
    
    Array.from(list.children)
        .filter(item => !item.textContent.toLocaleLowerCase().includes(searchTodo))
        .forEach(item => item.classList.add('hide'))
    
    Array.from(list.children)
        .filter(item => item.textContent.toLocaleLowerCase().includes(searchTodo))
        .forEach(item => item.classList.remove('hide'))
}

//add todos

addTodosForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodosForm.add.value.trim();
    if(todo.length) {
        todoHtmlTemplate(todo);
        addTodosForm.reset();
    }
});

//delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//search todos

searchForm.addEventListener('keyup', e => {
    const searchTodo = searchForm.value.trim().toLowerCase();
    filteredTodos(searchTodo);
});