import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IListing } from "@/types/listing.types";
import Image from "next/image";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import WishListButton from "./WishListButton";
import { isListingExistInWishList } from "@/services/wishlist";
import { getCurrentUser } from "@/services/auth";

const ListingCard = async ({ listing }: { listing: IListing }) => {
  const user = await getCurrentUser();
  let isExist = false;
  if (user) {
    const checkListingExistInWishlist = await isListingExistInWishList(listing?._id);
    isExist = checkListingExistInWishlist?.data;
  }

  return (
    <Card className="p-3 bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <CardHeader className="relative p-0 h-48">
        <Image
          src={
            // listing?.imageUrls[0] ||
            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
          }
          width={500}
          height={500}
          alt="product image"
          className="rounded-sm h-48 object-cover"
        />
        {/* {product?.stock === 0 && <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">Out of Stock</div>} */}
      </CardHeader>

      <CardContent className=" p-0 mt-2">
        <CardTitle title={listing?.title} className="font-semibold cursor-pointer text-sm">
          {listing?.title.length > 20 ? listing?.title?.slice(0, 20) + "..." : listing?.title}
        </CardTitle>

        <div className="flex items-center justify-between my-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">$ {listing?.price.toFixed(2)}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="block p-0">
        <div className="flex gap-2 items-center justify-between">
          <Link href={`/listings/${listing?._id}`} passHref>
            <Button size="sm" variant="primary" className="w-32">
              <BsEye />
              View Details
            </Button>
          </Link>

          <WishListButton isExist={isExist} listingId={listing?._id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
