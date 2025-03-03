"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IListing } from "@/types/listing.types";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ListingCard = ({ listing }: { listing: IListing }) => {
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
        <Link href={`/listings/${listing?._id}`} passHref>
          <CardTitle title={listing?.title} className="font-semibold cursor-pointer text-sm">
            {listing?.title.length > 20 ? listing?.title?.slice(0, 20) + "..." : listing?.title}
          </CardTitle>
        </Link>

        <div className="flex items-center justify-between my-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">$ {listing?.price.toFixed(2)}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="block p-0">
        <div className="flex gap-2 items-center justify-between">
          <Button size="sm" variant="outline" className="w-32">
            Buy Now
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0 flex items-center justify-center rounded-full">
            <Heart />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
