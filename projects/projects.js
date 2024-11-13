/**
 * @author: Void (c) 2024
 * @name: Projects-Script
 * @description: This script is used to display the projects on the website.
 * @since: 1.0.0
 */
document.addEventListener('DOMContentLoaded', () => {
    
    loadProjects()
        .then(projects => {
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
            let htmlTemplate = `
                <div class="project-entry">
                    <article class="grid" style="height: 350px;">
                        <a href="./project-list/${project.meta.project_url}.html" class="cover-image" style="background: url(../assets/projects/${project.meta.image}); background-size: cover; background-position: center center;"></a>
                        <div style="padding: 15px;">
                            <a href="./project-list/${project.meta.project_url}.html" style="text-decoration: none;"><h3>${project.meta.name}</h3></a>
                            <p>${project.meta.description}</p>
                            <div>
                                <p style="margin-bottom: 10px;"><strong>Languages:</strong></p>
                                ${getProgrammingLanguageList(project.meta.programming_languages)}
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