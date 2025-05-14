export type TAdminStateData = {
  totalCategories: number;
  totalUsers: number;
  totalListings: number;
};

export type TAdminCategoryDistribution = {
  count: number;
  categoryName: string;
};

export type TAdminListingConditionDistribution = {
  count: number;
  condition: string;
};

export type TAdminListing = {
  _id: string;
  title: string;
  price: number;
  image: string;
  status: string;
  city: string;
};

export type TAdminUser = {
  _id: string;
  fullName: string;
  email: string;
  image: string;
};

export type TAdminMetaData = {
  stateData: TAdminStateData;
  categoryDistribution: TAdminCategoryDistribution[];
  listingConditionDistribution: TAdminListingConditionDistribution[];
  latestListings: TAdminListing[];
  latestUsers: TAdminUser[];
};
