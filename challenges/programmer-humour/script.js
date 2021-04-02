// # Programmer humor

// Selectors
const imgDiv = document.getElementById("joke-img");
const imgEl = document.createElement("img");
imgDiv.append(imgEl);

// Delays the display of the h2 element
setTimeout(function() {
    document.querySelector("h2").style.visibility = "visible";
}, 10000);

fetch(`https://xkcd.now.sh/?comic=latest`)
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
.then(function(jokeObj) {
    // Logs Object to console
    console.log(jokeObj);
    // Assigns jokeObj image to image element source
    imgEl.src = jokeObj.img;
})
.catch((error) => {
    // Handle the error
    console.log(error);
});