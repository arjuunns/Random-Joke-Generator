const button = document.querySelector("button");
const jokeBox = document.querySelector("p");
const url = "https://v2.jokeapi.dev/joke/Any";
jokeBox.innerHTML = "";
let joke = "";


const fetchJoke = async function () {
  try {
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData);
    if (jsonData.type === "twopart") {
      joke = `${jsonData.setup} \n ${jsonData.delivery}`;
    } else {
      joke = jsonData.joke;
    }
    showJoke(joke);
  } catch (error) {
    jokeBox.innerHTML = "Bhot has liya nikal lawde!!";
  }
};


const showJoke = function (joke) {
  jokeBox.innerHTML = `${joke}`;
};


button.addEventListener("click", fetchJoke);
window.addEventListener("keypress", (e)=>{
    if(e.key == "Enter") fetchJoke();
});
