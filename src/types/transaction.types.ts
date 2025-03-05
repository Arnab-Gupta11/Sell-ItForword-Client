import { TListingDetails } from "./listing.types";

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  image: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITransaction {
  _id: string;
  buyerID: IUser;
  sellerID: IUser;
  listingID: TListingDetails;
  transactionId: string;
  paymentStatus: "pending" | "completed";
  status: "pending" | "completed";
  createdAt: string;
  updatedAt: string;
  __v: number;
}
