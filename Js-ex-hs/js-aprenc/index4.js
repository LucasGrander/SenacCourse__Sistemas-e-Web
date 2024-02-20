var a = document.getElementById('area');

a.addEventListener('click', clickar);
a.addEventListener('mouseenter', enter);
a.addEventListener('mouseout', exit);

function clickar(){
    a.innerText = 'Clickou!';
    a.style.background = 'Yellow';
};

function enter(){
    a.innerText = 'Entrou!';
    a.style.background = 'Blue';
};

function exit(){
    a.innerText = 'Saiu!';
    a.style.background = 'Red';
};