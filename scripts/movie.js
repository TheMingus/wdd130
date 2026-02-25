async function loadFirstMovie() {
  const data = await fetch("movie.json").then(r => r.json());
  document.getElementById("movie").innerHTML = `<a href="${data.link}" target="_blank" rel="noopener noreferrer"> Most recently, I watched ${data.title}.</a>`;
}

loadFirstMovie();