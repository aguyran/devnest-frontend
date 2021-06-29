const imageTag = document.getElementById("imaged");
document.addEventListener("load", random());
function random() {
  fetch("https://meme-api.herokuapp.com/gimme").then((response) => {
    response.json().then((data) => {
      imageTag.src = data["url"];
    });
  });
}
