

function createButtonDel(fn) {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('x'));
    buttonDel.classList.add('del');
    buttonDel.onclick = e => {
        e.target.parentElement.remove();
        if(typeof (fn) === 'function'){
            fn();
        }
    }
    return buttonDel;
}
function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}