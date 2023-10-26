const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get ("id");


if (id === 0) {
    location.href = "/";
}
const url  = "https://api.noroff.dev/api/v1/books/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function makeApiCall(){
    try {
        const response = await fetch(url);
        const results = await response.json();
        detailContainer.innerHTML = `<div>${results.title}</div>
                                        <div>${results.author}`
    }
    catch(error){console.log(error);};}

makeApiCall();


