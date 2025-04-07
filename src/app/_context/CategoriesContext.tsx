"use client";
import { BASE_URL } from "@/constants";
import { FoodType } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
type categoriesContextType = {
  categories: FoodType[];
  getCategories: () => void;
};
export const CategoriesContext = createContext<categoriesContextType>(
  {} as categoriesContextType
);

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<FoodType[]>([]);

  const getCategories = async () => {
    const data = await fetch(`${BASE_URL}/categories`, {
      method: "GET"});
    const categories = await data.json();
    setCategories(categories.data);
    console.log(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <CategoriesContext.Provider value={{ categories, getCategories }}>
        {children}
      </CategoriesContext.Provider>
    </div>
  );
};