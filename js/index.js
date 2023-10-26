const listContainer = document.querySelector(".list");
const select  = document.querySelector("select");

select.addEventListener("change", displayContainer);

function displayContainer (event){
     
    const amount = event.target.value;
    
    listContainer.innerHTML = "";
    
    for(let i=1; i<= amount; i++){
        listContainer.innerHTML+= `<a class="item" href="details.html?id=${i}">${i}</a>`;
    }
}



