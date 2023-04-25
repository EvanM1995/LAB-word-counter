console.log("Connected!")

const wordCounter = (value) => {
  console.log(value);
  if (value) {
    wordCount.innerHTML = `Word Count: 0`;
  
  } else { 

    error.innerHTML = "";
  }
}

const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.innerHTML = "";
  wordCount.innerHTML = "";
  const value = textarea.value;
  wordCounter(value);
});

form.addEventListener("reset", () => {
  error.innerHTML = "";
  wordCount.innerHTML = "";
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
