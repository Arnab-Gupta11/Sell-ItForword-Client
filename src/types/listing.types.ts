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
