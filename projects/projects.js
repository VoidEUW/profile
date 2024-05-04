var project_list = {
    "projects": [
        {
            "name": "project-odyssee",
            "version": "(work in progess)",
            "programming_languages": [
                "HTML",
                "CSS",
                "Javascript"
            ],
            "description": "this project is secret..." 
        },
        {
            "name": "project-miko",
            "version": "(work in progress)",
            "programming_languages": [
                "Python"
            ],
            "description": "Project Miko is a discord bot thats moderating on servers, logging and so on (work in progress)"
        },
        {
            "name": "graph-program",
            "version": "1.0",
            "programming_languages": [
                "Python"
            ],
            "description": "A graph program that can show different graphs in your terminal"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    let projects = [];
    project_list.projects.forEach(project => {
        projects.push(project);
    });
    project_html = loadProjects(projects);
    let projectList = document.getElementById('projectsList');
    projectList.innerHTML = project_html
});

function loadProjects(projects) {
    var loaded_projects = [];
    projects.forEach(project => {
        let name = project.name;
        let version = project.version;
        let programming_languages = "<p>Language: ";
        let description = project.description;

        project.programming_languages.forEach(language => {
            programming_languages += `<strong>${language}</strong> `;
        }); programming_languages += "</p>";

        loaded_projects += `
            <div class="grid" style="grid-template-columns: 30% 68.64%;">
                <article style="background: url('../assets/projects/${name}.png'); background-size: cover; background-position: center center;"></article>
                <article>
                    <h2><a href="">${name}</a></h2>
                    <p>Version: ${version}</p>
                    ${programming_languages}
                    <p>${description}</p>
                </article>
            </div>
        `

    });
    return loaded_projects;
}