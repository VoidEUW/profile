document.addEventListener("DOMContentLoaded", function() {
    let projects_list = loadProjects();
    //displayProjects(projects_list);
});

function loadProjects() {
    fetch('projects.json') // Passe den Pfad entsprechend an
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Laden der Datei.');
            }
            return response.json();
        })
        .then(projects => {
            const json = JSON.stringify(projects);
            console.log(json);
            // Hier kannst du weitere Logik ausführen oder die JSON-Daten anderweitig verwenden
            return json;
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
}

function displayProjects(name, programming_languages, description) {

}

function getSearchResults(content) {
    let results = [];
    search_list.players.forEach(player => {
        if (player.name.toLowerCase().includes(content.toLowerCase()))
            results.push(player);
    });
    return results;
}

function displaySearchResults(results) {
    output = "";
    results.forEach(result => {
        let name = result.name;
        let profile_picture = result.profile_picture;
        if(profile_picture.length < 1) {
            profile_picture = "not_found.png"
        }
        let games_list = result.games, games_html = "";
        let tags_list = result.tags, tags_html = `<p style="font-size: large; color: blueviolet">`;
        let description = result.description;

        games_list.forEach(game => {
            games_html += `<img src="./assets/games/${game}.png" alt="${game}" style="width: 50px"></img>`;
        });
        tags_list.forEach(tag => {
            tags_html += `${tag} `;
        });
        tags_html += "</p>";

        output += `
        <div class="grid" style="grid-template-columns: 30% 68.3%;">
            <article style="background: url(./assets/users/${profile_picture}); background-size: cover; background-position: center center"></article>
            <article>
                <h3 style="margin-bottom: 5px">${name}<h3>
                <div style="margin-bottom: 5px">
                    ${games_html}
                </div>
                <div>
                    ${tags_html}
                </div>
                <p style="font-size: large;">${description}</p>
            </article>
        </div>
        `;
    });
    searchResults.innerHTML = output;
}