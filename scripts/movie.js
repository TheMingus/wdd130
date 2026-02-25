async function loadFirstMovie() {
  const data = await fetch("/movie.json").then(r => r.json());
  document.getElementById("movie").innerHTML = `<a href="${link}" target="_blank" rel="noopener noreferrer"> Most recently, I watched ${title}.</a>`;
}

loadFirstMovie();