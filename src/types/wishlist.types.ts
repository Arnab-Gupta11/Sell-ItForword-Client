import { TListingDetails } from "./listing.types";

export interface IWishlist {
  _id: string;
  userID: string;
  listings: TListingDetails[];
  createdAt: Date;
  updatedAt: Date;
}
