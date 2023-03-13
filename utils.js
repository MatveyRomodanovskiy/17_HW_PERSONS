

function createButtonDel() {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('x'));
    buttonDel.classList.add('del');
    buttonDel.onclick = e => {
        removePersone(e.target.parentElement.id);
        e.target.parentElement.remove();
    }
    return buttonDel;
}