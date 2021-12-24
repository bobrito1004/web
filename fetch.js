var btn = document.getElementById("btn").addEventListener('click', getPost);
var ID = 1;
var div = document.getElementById("CardDiv");

function getPost() {
    var gif = document.getElementById("gif");
    var err = document.getElementById("error");
    gif.style.visibility = "visible";
    err.textContent = "";
    fetch('https://jsonplaceholder.typicode.com/posts/' + ID)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((post) => {
            let tbody = document.querySelector("#CardDiv");
            let template = document.querySelector("#temp")
            let clone = template.content.cloneNode(true);
            let title = clone.querySelector(".title");
            let info = clone.querySelector(".info");
            title.textContent = post.title;
            info.textContent = post.body;
            tbody.appendChild(clone);
            ID = ID + 1
            gif.style.visibility = "hidden";
        })
        .catch((error) => {
            err.textContent = error;
            gif.style.visibility = "hidden";
        });
}