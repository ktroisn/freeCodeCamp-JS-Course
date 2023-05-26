let counter = 0;
let count = document.getElementById('count');
let entries = document.getElementById('entries-save');

function increment(){
    counter += 1;
    count.innerHTML = counter;
};

function save(){
    let addCount = counter + "/";

    count.textContent = 0;
    counter = 0 ; 
    entries.innerHTML += addCount;
};
