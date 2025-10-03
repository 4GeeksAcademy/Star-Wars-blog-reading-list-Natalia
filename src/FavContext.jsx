import { createContext, useState, useEffect } from "react";

export const FavContext = createContext({
  favorites: [],
  addFav: () => {},
  deleteFav: () => {},
  isFav: () => {},
});

export const FavProvider = ({ children }) => {
  // 🔄 Init. localStorage
  const [favorites, setFav] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // 💾 Save in localStorage after every change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFav = (id, name) => {
    const exists = favorites.some((fav) => fav.id === id && fav.name === name);
    if (!exists) {
      setFav([...favorites, { id, name }]);
    }
  };

  const deleteFav = (name) => {
    setFav(favorites.filter((elem) => elem.name !== name));
  };

  const isFav = (id, name) => {
    return favorites.some((elem) => elem.id === id && elem.name === name);
  };

  return (
    <FavContext.Provider value={{ favorites, addFav, deleteFav, isFav }}>
      {children}
    </FavContext.Provider>
  );
};
