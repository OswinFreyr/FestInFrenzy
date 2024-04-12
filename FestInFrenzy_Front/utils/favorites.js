export function toggleFavoriteFestival(festivalId) {
    console.log("1");
    const favorites = JSON.parse(localStorage.getItem('favoriteFestivals')) || [];
  
    const index = favorites.indexOf(festivalId);
    if (index === -1) {
      // si le festival n'est pas déjà dans les favoris, l'ajouter
      favorites.push(festivalId);
      console.log(festivalId, ' ajouté aux fav');
    } else {
      // sinon, le retirer des favoris
      favorites.splice(index, 1);
      console.log(festivalId, ' retiré des fav');
    }
  
    localStorage.setItem('favoriteFestivals', JSON.stringify(favorites));
  }
  
  export function isFavorite(festivalId) {
    const favorites = JSON.parse(localStorage.getItem('favoriteFestivals')) || [];
    return favorites.includes(festivalId);
  }
  
  export function favoriteFestivals() {
    console.log("coucou");
    return JSON.parse(localStorage.getItem('favoriteFestivals')) || [];
}