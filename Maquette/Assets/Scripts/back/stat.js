document.addEventListener('DOMContentLoaded', () => {
    const stats = {
        totalFilms: 123,
        bestRating: 9.5,
        mostCommentedFilm: 'Inception',
        lessCommentedFilm: "Alad'2",
        mostLikedActor: 'Leonardo DiCaprio',
        mostLikedActress: 'Scarlett Johansson',
        mostActiveUser: 'User123',
        mostRecommandedRealisator: 'Christopher Nolan',
        mostLikedGenre: 'Science-Fiction'
    };

    // Mettre à jour le contenu des éléments de statistiques
    document.getElementById('total-films').textContent = stats.totalFilms;
    document.getElementById('best-rating').textContent = stats.bestRating;
    document.getElementById('most-commented-film').textContent = stats.mostCommentedFilm;
    document.getElementById('less-commented-film').textContent = stats.lessCommentedFilm;
    document.getElementById('most-liked-actor').textContent = stats.mostLikedActor;
    document.getElementById('most-liked-actress').textContent = stats.mostLikedActress;
    document.getElementById('most-active-user').textContent = stats.mostActiveUser;
    document.getElementById('Most-recommanded-realisator').textContent = stats.mostRecommandedRealisator;
    document.getElementById('most-liked-genre').textContent = stats.mostLikedGenre;

    // Exemple d'interactivité supplémentaire
    document.querySelectorAll('.stat-item').forEach(item => {
        item.addEventListener('click', () => {
            alert(`Statistique : ${item.querySelector('h2').textContent}`);
        });
    });
});
