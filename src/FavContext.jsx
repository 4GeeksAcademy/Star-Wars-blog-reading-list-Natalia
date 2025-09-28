import { createContext, useState } from "react";

export const FavContext = createContext({
  favorites: [],
  addFav: () => {},
  deleteFav: () => {},
  isFav: () => {},
});

export const FavProvider = ({ children }) => {
  const [favorites, setFav] = useState([]);

  const addFav = (id, name) => {
  const exists = favorites.some((fav) => fav.id === id && fav.name === name);
  if (!exists) {
    setFav([...favorites, { id, name }]);
  }
};

  const deleteFav = (name) => {
    setFav(
      favorites.filter((elem) => {
        return elem.name != name;
      })
    );
  };

  const isFav = (id, name) => {
    return favorites.some((elem) => {
      return elem.id == id && elem.name == name;
    });
  };

  return (
   <FavContext.Provider
  value={{ favorites, addFav, deleteFav, isFav }}
>
  {children}
</FavContext.Provider>

  );
};
