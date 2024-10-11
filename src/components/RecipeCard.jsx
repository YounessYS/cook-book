import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState, useEffect } from "react";

const getTwoFromArray = (arr) => {
  return [arr[0], arr[1]];
};

export default function RecipeCard({ recipe, bg, badge, removeFavourite }) {
  const healthLabels = getTwoFromArray(recipe.healthLabels);
  const [isFavourite, setIsFavourite] = useState(false);

  // Effect to check if the recipe is already in favourites on component mount
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyFavourite = favourites.some(
      (fav) => fav.label === recipe.label
    );
    setIsFavourite(isRecipeAlreadyFavourite);
  }, [recipe.label]);

  const addRecipeToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyFavourite = favourites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyFavourite) {
      // Remove the recipe from favourites
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFavourite(false);
      if (removeFavourite) removeFavourite(recipe.label);
    } else {
      favourites.push(recipe);
      setIsFavourite(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative text-black`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="recipe image"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm ">
          <Soup size={16} /> {recipe.yield} Servings
        </div>
        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavourites();
          }}
        >
          {!isFavourite && (
            <Heart
              size={20}
              className="hover:fill-red-500  duration-100 hover:w-6"
            />
          )}
          {isFavourite && (
            <Heart
              size={20}
              className="fill-red-500 duration-100 hover:w-6 hover:opacity-70"
            />
          )}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-medium tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2 text-sm">
        {recipe.cuisineType[0][0].toUpperCase() +
          recipe.cuisineType[0].slice(1).toLowerCase()}{" "}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
