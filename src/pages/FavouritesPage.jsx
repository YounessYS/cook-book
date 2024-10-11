import RecipeCard from "../components/RecipeCard.jsx";

export default function FavouritesPage() {
  const fav = false;
  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4 text-gray-200">
          My Favourites
        </p>

        {!fav && (
          <div className="h-[80vh] w-full flex flex-col items-center gap-4">
            <img
              src="/no-favs.png"
              alt="no favourites"
              className="w-full h-full object-fill rounded"
            />
          </div>
        )}

        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
}
