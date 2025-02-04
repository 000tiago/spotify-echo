const logoImage = document.querySelector('.logo-image');

logoImage.addEventListener('mouseenter', () => {
    logoImage.src = './src/assets/icons/logo-spotifyecho.png'; // Altere para o caminho da nova imagem
});

logoImage.addEventListener('mouseleave', () => {
    logoImage.src = './src/assets/icons/logo-spotify.png'; // Volta para a imagem original
});
