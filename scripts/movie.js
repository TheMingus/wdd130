async function loadFirstMovie() {
  try {
    const proxy = "https://api.allorigins.win/raw?url=";
    const target = "https://letterboxd.com/themrmingus/rss/";
    
    const response = await fetch(proxy + encodeURIComponent(target));
    const text = await response.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");

    const firstItem = xml.querySelector("item");
    const title = firstItem.querySelector("title")?.textContent;
    const link = firstItem.querySelector("link")?.textContent;

    const span = document.getElementById("movie");

    if (title && link) {
      span.innerHTML = `
        <a href="${link}" target="_blank" rel="noopener noreferrer">
          Most recently, I watched ${title}.
        </a>
      `;
    } else {
      span.textContent = "No movie found";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("movie").textContent = "Error loading movie";
  }
}

loadFirstMovie();