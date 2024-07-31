// const newPromis = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         alert('1');
//         resolve()
//     }, 1000);
// });

// newPromis.then(() => {
//     alert('2');
// })











const colors = [
    'crimson',
    'deeppink',
    'deepskyblue',
    'gold',
    'lightgrey',
    'pink',
    'orange',
    'mediumturquoise',
    'lemonchiffon',
    'indigo',
];

function setColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector('#current-color').innerHTML = color;

    const currentACtiveButton = document.querySelector('button.active');
    if (currentACtiveButton != null) {
        currentACtiveButton.classList.remove('active');

    }
    document.querySelector(`button[data-color="${color}"]`).classList.add('active');
};

colors.forEach((color) => {
    const button = document.createElement("button");
    button.classList.add('button');
    button.style.backgroundColor = color;
    document.querySelector('div.colors').append(button);
    button.setAttribute('data-color', color);

    button.onclick = () => {
        setColor(color);
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const randomNum = Math.floor(Math.random() * colors.length);
    const color = colors[randomNum];
    setColor(color);
});



const items = ['first', 'second', 'third', 'forth'];
const userInput = document.querySelector('#userInput');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    let found = false;
    items.forEach((item) => {
        if (item.includes(userInput.value.toLowerCase())) {
            found = true;
        }
    });

    if (found) {
        alert("It includes!");
        userInput.value = "";
    } else {
        alert("Oops");
    }
});