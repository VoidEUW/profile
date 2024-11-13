/**
 * @author: Void (c) 2024
 * @name: News-Script
 * @description: This script is used to display the news page on the website.
 * @since: 1.0.0
 */
document.addEventListener('DOMContentLoaded', () => {

    loadNewsJson()
        .then(news => {
            displayNewsfeed(news.news);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    async function loadNewsJson() {
        try {
            const response = await fetch('../../data/news/news.json');
            if (!response.ok) {
                throw new Error('Error while loading the JSON file.');
            }
            const projects = await response.json();
            return projects;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function displayNewsfeed(news) {
        document.getElementById('news-feed').innerHTML = getNewsFeed(news);
    }

    function getNewsFeed(news) {
        let newsfeed = '';
        news.forEach(entry => {
            thumbnail = '';
            if (entry.content.thumbnail !== null ) {
                thumbnail = `
                    <div id="thumbnail">
                        <img src="../assets/news/thumbnails/${entry.content.thumbnail}" style="width: 100%; height: 25vh; object-fit: cover;">
                    </div>
                `;
            }
            newsfeed += `
                <div class="news-entry">
                    <article>
                        <div style="display: flex; justify-content:space-between; padding-bottom: 1vh">
                            <div style="display: flex; justify-content: start;">
                                <img src="../assets/users/${entry.meta.author_image}" alt="profile picture" style="width: 40px; height: 40px; border-radius: 50%;">
                                <p style="margin-top: 5px; margin-left: 10px;">${entry.meta.author}</p>
                            </div>
                            <p style="margin-top: 5px; text-align: end;">Date: ${entry.meta.date}</p>
                        </div>
                        ${thumbnail}
                        <div style="margin-top: 35px" class="paragraph">
                            <h3>${entry.meta.title}</h3>
                            <p>
                                ${entry.content.introduction}
                            </p>
                            <div style="margin-top: 50px">
                                ${getDetails(entry.content.details)}
                            </div>
                        </div>
                    </article>
                </div>
            `;
        });
        console.log(newsfeed);
        return newsfeed;
    }

    function getDetails(details) {
        let detailsContent = '';
        details.forEach(detail => {
            detailsContent += `
                <details class="paragraph">
                    <summary>${detail.name}</summary>
                    <p>
                        ${detail.description}
                    </p>
                </details>
            `;
        });
        return detailsContent;
    }
});