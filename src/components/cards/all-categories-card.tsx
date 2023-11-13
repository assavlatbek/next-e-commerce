import AllproductsType from "@/types/all-categories";

import "../style.css";
import Link from "next/link";
import Image from "next/image";

const AllCategoriesCard = ({ image, _id, name }: AllproductsType) => {
  return (
    <Link className="categories" href={`/categories/${_id}`}>
      <div className="categories-image">
        <Image width={200} height={200} src={image?.url} alt="image" />
      </div>
      <h3 className="category-name">{name}</h3>
    </Link>
  );
};

export default AllCategoriesCard;
