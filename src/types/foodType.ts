// src/types/foodType.ts
export interface CountryInfo {
    name: string;
    flag: string;
  }
  
  export interface FoodDetails {
    categories: string[];
    country: CountryInfo;
    description: string;
    image_url: string;
  }
  
  export interface FoodType {
    [country: string]: {
      foods: {
        [foodName: string]: FoodDetails;
      };
    };
  }
  