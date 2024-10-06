export interface Food {
    FoodId: number;
    FoodImageUrl: string;
    FoodUrl: string;
    FoodName: string;
    FoodDescription: string;
  }
  
  export interface RegionData {
    Region: string;
    Count: number;
    Foods: Food[];
  }
  
  export interface FoodData {
    oceania: RegionData;
    asia: RegionData
    "middle-east": RegionData
    africa: RegionData
    "south-america": RegionData
    europe: RegionData
    "north-america": RegionData
  }
  
  export interface RootObject {
    data: FoodData;
    message: string;
  }
  