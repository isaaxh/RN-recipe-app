import axios from 'axios';
import {Meal} from '../screens/HomeScreen';

type data = {
  meals: Meal[];
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const mealDB = axios.create({
  baseURL: BASE_URL,
});

export const fetchRandomMeals = async (): Promise<data> => {
  try {
    const response = await mealDB.get('/random.php');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMealByName = async (name: string) => {
  try {
    const response = await mealDB.get(`/search.php?s=${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
