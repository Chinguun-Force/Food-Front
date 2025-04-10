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
import axios from "axios";
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
    const {data} = await axios.get(`${BASE_URL}/categories`);
    setCategories(data.categories);
  }
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  
  return (
    <div>
      <CategoriesContext.Provider value={{ categories, getCategories }}>
        {children}
      </CategoriesContext.Provider>
    </div>
  );
};