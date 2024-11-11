/**
    @Author: Void (c) 2024
    @Title: Projects-Script
    @Description: This script is used to display the projects on the website.
    @Since: 1.0.0
*/
document.addEventListener('DOMContentLoaded', () => {
    
    loadProjects()
        .then(projects => {
            // console.log(projects.projects);
            displayProjects(projects.projects);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    async function loadProjects() {
        try {
            const response = await fetch('../data/projects/projects.json');
            if (!response.ok) {
                throw new Error('Error while loading the JSON file.');
            }
            const projects = await response.json();
            return projects;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function displayProjects(projectList) {
        let projectsList = document.getElementById('project-list');
        projectList.forEach(project => {
            let projectTitle = project.meta.name;
            let projectDescription = project.meta.description;
            let projectImage = project.meta.image;
            let projectLink = project.meta.project_url;
            let projectLanguages = getProgrammingLanguageList(project.meta.programming_languages);
            let htmlTemplate = `
                <div class="project-entry">
                    <article class="grid" style="height: 350px;">
                        <a href="./${projectLink}.html" class="cover-image" style="background: url(../assets/projects/${projectImage}); background-size: cover; background-position: center center;"></a>
                        <div style="padding: 15px;">
                            <a href="./${projectLink}.html" style="text-decoration: none;"><h3>${projectTitle}</h3></a>
                            <p>${projectDescription}</p>
                            <div>
                                <p style="margin-bottom: 10px;"><strong>Languages:</strong></p>
                                ${projectLanguages}
                            </div>
                        </div>
                    </article>
                </div>
            `;
            projectsList.innerHTML += htmlTemplate;
        });
    }

    function getProgrammingLanguageList(languages) {
        let languageList = '';
        languages.forEach(language => {
            languageList += `<img src="../assets/icons/${language}.png" class="programming-icon">`;
        });
        return languageList;
    }
});