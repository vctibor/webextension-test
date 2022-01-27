function component() {
    const element = document.createElement('div');
    element.innerHTML = 'malky je buh'
    return element;
}

document.body.appendChild(component());
