import RecipeCard from "../components/RecipeCard.jsx";
import { getRandomColour } from "../lib/utils";
import { useState, useEffect } from "react";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);

    const handleStorageChange = () => {
      const updatedFavourites =
        JSON.parse(localStorage.getItem("favourites")) || [];
      setFavourites(updatedFavourites);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const removeFavourite = (recipeLabel) => {
    const updatedFavourites = favourites.filter(
      (fav) => fav.label !== recipeLabel
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4 text-gray-200">
          My Favourites
        </p>

        {favourites.length === 0 && (
          <div className="h-[80vh] w-full flex flex-col items-center gap-4">
            <img
              src="/no-favs.png"
              alt="no favourites"
              className="w-full h-full object-fill rounded opacity-70 pointer-events-none select-none"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColour()}
              removeFavourite={removeFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
