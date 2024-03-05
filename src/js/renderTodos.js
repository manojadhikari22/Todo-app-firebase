
import {doc, deleteDoc} from 'firebase/firestore'
import {database} from './app'

const renderTodos = (todosArray) => {
    const ul = document.querySelector('.todos-ul');

    // Clear the content of ul before rendering todos
    ul.textContent = '';

    todosArray.forEach((todo, index) => {
        //CREATE THE ELEMENT FOR TODO
        const todoRow = document.createElement('li');
        const numberSpan = document.createElement('span');
        const titleSpan = document.createElement('span');
        const dateSpan = document.createElement('span');
        const descriptionSpan = document.createElement('span');
        const deletecontainerSpan = document.createElement('span');
        const deleteButton = document.createElement('button');

        //APPEND ELEMENTS
        ul.append(todoRow);
        todoRow.append(numberSpan, titleSpan, dateSpan, descriptionSpan, deletecontainerSpan);
        deletecontainerSpan.append(deleteButton);

        //SET THE VALUE OF TODOS
        numberSpan.textContent = index + 1;
        titleSpan.textContent = todo.todoTitle;
        dateSpan.textContent = todo.todoDate;
        descriptionSpan.textContent = todo.todoDescription;
        deleteButton.textContent = 'Delete X';

        //ADD CLASSES TO THE ELEMENTS
        todoRow.classList.add('todo-row');
        numberSpan.classList.add('todo-number');
        titleSpan.classList.add('todo-title');
        dateSpan.classList.add('todo-date');
        descriptionSpan.classList.add('todo-description');
        deletecontainerSpan.classList.add('todo-delete-container');
        deleteButton.classList.add('delete-button');

        todoRow.dataset.id = todo.id //defining id data

        //DELETE A TODO
        deleteButton.addEventListener('click', (e)=>{
            const rowId = e.currentTarget.parentElement.parentElement.dataset.id; // defining row id
            e.preventDefault();
            deleteTodo(todosArray, rowId)
        })
    });
};

async function deleteTodo(todosArray, id){
    const index = todosArray.findIndex(todo => todo.id === id);
    if(index !== -1){
        const documentToDelete = todosArray[index].id;
        const docDeleteRef = doc(database, 'todos', documentToDelete);
        await deleteDoc(docDeleteRef)
    }
}

export { renderTodos };