import FavoritesPage from "@/app/list/favourites-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce | Favourites",
  description: "E-commerce by Savlatbek",
};
const FavouritesPage = () => {
  return (
    <section>
      <div className="container">
        <br />
        <h1 style={{ fontSize: "28px" }}>Favourites</h1>
        <br />
        <FavoritesPage />
        <br />
      </div>
    </section>
  );
};

export default FavouritesPage;
