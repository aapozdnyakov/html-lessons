console.log(document);
let usersBlock = document.querySelector('.users');
console.log(usersBlock);
usersBlock.addEventListener('click', (event) => {
    let button = event.target.closest('[data-user]');
    if (!button) {
        return;
    }
    let [name, lastName, secondName] = button.dataset.user.split(' ');
    let [userForm] = document.forms;
    userForm.name.value = name;
    userForm.secondName.value = secondName;
    userForm.lastName.value = lastName;

    console.log(userForm);
})
let reset = () => {
    let [userForm] = document.forms;
    userForm.name.value = '';
    userForm.secondName.value = '';
    userForm.lastName.value = '';
}

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset)


let saveButton = document.querySelector('.save');
saveButton.addEventListener('click', () => {
    let button = document.createElement('div');
    let [userForm] = document.forms;
    button.innerHTML = `<button data-user="${userForm.name.value} ${userForm.lastName.value} ${userForm.secondName.value}" class="col-12 btn btn-outline-primary mb-1">${userForm.name.value}
    ${userForm.secondName.value}</button>`;
    usersBlock.append(button.firstElementChild);
    reset();
})