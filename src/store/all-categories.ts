import AllCategoriesType from "@/types/all-categories";
import crud from "./crud";

const useAllCategories = crud<AllCategoriesType>("category");

export default useAllCategories;
