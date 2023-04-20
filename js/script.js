document.addEventListener("DOMContentLoaded", function() {
    const jokeText = document.getElementById("joke-text");
    const jokeCard = document.getElementById("joke");
    const newJokeButton = document.getElementById("new-joke");

    function fetchJoke() {
        fetch('https://v2.jokeapi.dev/joke/Any?format=json')
            .then(response => response.json())
            .then(data => {
                if (data.type === "single") {
                    jokeText.textContent = data.joke;
                } else {
                    jokeText.textContent = data.setup + " " + data.delivery;
                }
                jokeCard.style.display = "block";
            })
            .catch(error => {
                jokeText.textContent = "Oops! Something went wrong. Please try again.";
            });
    }

    fetchJoke();

    newJokeButton.addEventListener("click", fetchJoke);
});
