import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

// This is a react component
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    // use a function because setting the state relies on prev state
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites, favoriteMeetup]
    })
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(({ id }) => id !== meetupId)
    })
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(({ id }) => id === meetupId)
  }

  // this context is exposed to all components wrapped by this FavoritesContextProvider component
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }


  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext