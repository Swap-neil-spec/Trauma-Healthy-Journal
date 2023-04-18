function loadFeaturedArticles() {
    fetch('trauma-data.json')
      .then(response => response.json())
      .then(data => {
        const articlesContainer = document.getElementById('featured-articles');
        data.featured_articles.forEach(article => {
          const articleHtml = `
            <article>
              <img src="${article.image}" alt="${article.title}">
              <div>
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <span>By ${article.author} on ${article.date}</span>
              </div>
            </article>
          `;
          articlesContainer.insertAdjacentHTML('beforeend', articleHtml);
        });
      })
      .catch(error => console.error(error));
  }
  
  loadFeaturedArticles();
  