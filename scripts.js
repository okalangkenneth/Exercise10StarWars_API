document.addEventListener("click", function (event) {
    if (!event.target.matches("#button")) return;

    fetch("https://www.swapi.tech/api/people/?name=")
    .then((response) => response.json())
    .then((data) => renderCharacter(data))
    .catch(() => renderError())
    
});
    
    function renderCharacter(data) {
        const setup = document.getElementById("setup");
        const punchline = document.getElementById("punchline");
        setup.innerHTML = data.setup;
        punchline.innerHTML = data.punchline;
      }

      function renderError() {
        const error = document.getElementById("error");
        error.innerHTML = "Whoops, something went wrong. Please try again later!";

        // Clears error message if user tries and request succeds
        const error = document.getElementById("error");
        error.innerHTML = "";
      }

        

  
