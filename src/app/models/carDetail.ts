import { DecimalPipe } from "@angular/common";

export interface CarDetail{
    id:number;
    brandId:number;
    colorId:number;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    carCategory:string;
    modelYear:number;
    carDescription:string;
    images:string[];
}