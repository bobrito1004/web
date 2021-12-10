var btn = document.getElementById("btn").addEventListener('click', getPost);
var ID = 0;
var div = document.getElementById("CardDiv");

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }

        })
        .then((post) => {
            div.innerHTML += `
            <div class = "post"> 
                <h3 class = "a">${post[ID][`title`]}</h3>
                ${post[ID].body}
            </div>`
            ID = ID + 1;
        })
        .catch((error) => {
            document.getElementById('CardDiv').innerHTML = '<div class="container"><p>Error</p></div>';
            console.log("Error: " + error);
        });

}