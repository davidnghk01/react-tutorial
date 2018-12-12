export async function fetchStarWarFilms() {
    const res = await fetch("https://swapi.co/api/films/");
    const data = await res.json();
    return data['results'];
}