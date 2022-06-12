import { Recipejson } from "./recipe.model.json";

export class RecipeClass implements Recipejson {
    id: number;
    shopName: string;
    shopImageUrl: string;
    shopArticleType: string;
    shopPhoneNumber: number;
    shopHours: string;
    shopContry: string;
    shopCity: string;
    shopMarketPlaceName: string;
    shopArticleType1: string;
    shopingredients: string[];
}