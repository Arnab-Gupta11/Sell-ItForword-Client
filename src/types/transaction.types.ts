import { TListingDetails } from "./listing.types";
import { TRefUser } from "./user.types";

export interface ITransaction {
  _id: string;
  buyerID: TRefUser;
  sellerID: TRefUser;
  listingID: TListingDetails;
  transactionId: string;
  paymentStatus: "pending" | "completed";
  status: "pending" | "completed";
  createdAt: string;
  updatedAt: string;
  __v: number;
}
