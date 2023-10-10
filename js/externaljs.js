const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = p => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${p}</span>
    <i class="fas fa-trash delete"></i>
</li>`;
    list.innerHTML += html;
}
// ADD
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trimStart().trimEnd();
    if (todo.length > 0) {

        generateTemplate(todo);
        addForm.reset();
    }
});
// DELETE
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// SEARCH
const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
            .forEach(todo => todo.classList.add('d-none'));

            Array.from(list.children)
            .filter(todo => todo.textContent.toLowerCase().includes(term))
                .forEach(todo => todo.classList.remove('d-none'));
}

search.addEventListener('keyup', () => {
    const term = search.value.trimStart().trimEnd().toLowerCase();
    filterTodos(term);
});


