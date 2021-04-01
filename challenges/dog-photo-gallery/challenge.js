// # Dog photo gallery

// Selectors & styling
const bodyEl = document.querySelector("body");
bodyEl.style.backgroundColor = "#43fcbe";

const h1El = document.querySelector("h1");
h1El.style.textAlign = "center";
h1El.style.color = "#0d34e4";

const unListEl = document.querySelector("ul");
unListEl.style.listStyleType = "none";
unListEl.style.textAlign = "center";
const listItemEl = document.createElement("li");

const buttonEl = document.querySelector("button");
buttonEl.style.padding= "1%";
buttonEl.style.backgroundColor = "#0d34e4";
buttonEl.style.borderColor = "#0d34e4";
buttonEl.style.color = "white";

const imgEl = document.createElement("img");
imgEl.height = 500;
imgEl.src = "https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg";
listItemEl.append(imgEl);
unListEl.append(listItemEl);

// When button is clicked, send fetch request
buttonEl.addEventListener("click", () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function(response) {
        // Checks response status is ok
        if (response.status >= 200 && response.status <= 299) {
            // Returns data
            return response.json();
        }
        // Throws an error is response status is not ok
        else {
            throw new Error(
                `Encountered something unexpected: ${response.status} ${response.statusText}`
            );
        }
    })
    .then(function(randomImage) {
        // Updates image source to random image from API
        imgEl.src = randomImage.message;
    })
    // Error handling
    .catch(error => console.log(error));
});