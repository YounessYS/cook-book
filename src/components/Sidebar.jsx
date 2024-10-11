import { Heart, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}

function DesktopSidebar() {
  const navigate = useNavigate();

  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block text-white text-opacity-80">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div
          className="w-full flex justify-center md:justify-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="logo" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link
            to={"/"}
            className="flex flex-col items-center md:flex-row md:gap-1"
          >
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link
            to={"/favourites"}
            className="flex flex-col items-center md:flex-row md:gap-1"
          >
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favourites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

function MobileSidebar() {
  return (
    <div className="flex justify-center gap-10 border-t bg-gray-800 fixed w-full bottom-0 left-0 z-10 p-2 sm:hidden">
      <Link to={"/"}>
        <Home size={"24"} className="cursor-pointer text-white" />
      </Link>
      <Link to={"/favourites"}>
        <Heart size={"24"} className="cursor-pointer text-white" />
      </Link>
    </div>
  );
}
