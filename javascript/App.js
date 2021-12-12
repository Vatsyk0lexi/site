const table = document.querySelector("#table");
const matches = document.querySelector("#matches");
const tableBlock = document.querySelector(".tableBlock");
const matchesBlock = document.querySelector(".matchesBlock");


table.addEventListener('click', event=>{
    
    matches.classList.remove("tabs__item_active");
    table.classList.add("tabs__item_active");

    tableBlock.style.display='block';
    matchesBlock.style.display='none';
    
});

matches.addEventListener('click', event=>{
    matches.classList.add("tabs__item_active");
    table.classList.remove("tabs__item_active");

    tableBlock.style.display='none';
    matchesBlock.style.display='block';
});


