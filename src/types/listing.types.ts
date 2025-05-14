import { ICategory } from "./category.types";
import { TRefUser } from "./user.types";

export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: "new" | "used";
  images: string[];
  category: string;
  userId: string;
  status: "available" | "sold";
  address: string;
  city: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
export type TListingDetails = {
  address: string;
  category: ICategory;
  city: string;
  condition: string;
  createdAt: string;
  description: string;
  image: string;
  phone: string;
  price: number;
  status: string;
  title: string;
  updatedAt: string;
  userId: TRefUser;
  __v: number;
  _id: string;
};
