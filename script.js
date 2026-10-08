let quoteID = document.getElementById("quoteID");
let authorID = document.getElementById("authorID");
let button = document.getElementById("buttonID");

async function dataQuote() {
    try {
        quoteID.innerText = "LOADING...";
        authorID.innerText = "";

        let response = await fetch('https://dummyjson.com/quotes/random');

        let data = await response.json();

        quoteID.innerText = `"${data.quote}"`; 
        authorID.innerText = `- ${data.author} -`;

    } catch (error) {
        console.log("Error : " + error);
        quoteID.innerText = "Loading Failed";
        authorID.innerText = "";
    }
}

dataQuote();

button.addEventListener("click", dataQuote);