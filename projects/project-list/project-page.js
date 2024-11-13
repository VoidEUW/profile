/**
 * @author: Void (c) 2024
 * @name: Project-Page-Script
 * @description: This script is used to display the project page on the website.
 * @since: 1.0.0
 */
document.addEventListener('DOMContentLoaded', () => {

    loadProject()
        .then(projects => {
            setBackgroundImage("background.jpg");
            displayProject(projects.projects);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    async function loadProject() {
        try {
            const response = await fetch('../../data/projects/projects.json');
            if (!response.ok) {
                throw new Error('Error while loading the JSON file.');
            }
            const projects = await response.json();
            return projects;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function displayProject(projectList) {
        
    }

    function setBackgroundImage(imageName) {
        document.getElementById("project-background-image").innerHTML = `<img src="../../assets/projects/backgrounds/${imageName}" alt="background" style="height: 20vh; width: 100%; object-fit: cover;">`;
    }
});

paragraph = `
    <div class="paragraph">
        <h2 style="text-align: center;">{Title}</h2>
        <p>{Description}</p>
        <div class="grid">
            {Images}
        </div>
    </div>
`;

images = `
    <article style="padding: 0;">
        <img src="../../assets/projects/pictures/picture1.png" alt="Placeholder">
    </article>
`;