"use client";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  "Electronics",
  "Furniture",
  "Clothing & Accessories",
  "Books",
  "Home Appliances",
  "Toys & Games",
  "Sports & Outdoors",
  "Vehicles",
  "Real Estate",
  "Musical Instruments",
  "Collectibles",
  "Tools & Equipment",
  "Health & Beauty",
  "Pets & Pet Supplies",
  "Bikes & Scooters",
];

const locations = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Mymensingh",
  "Narayanganj",
  "Comilla",
  "Bogra",
  "Rajbari",
  "Pabna",
  "Jessore",
  "Cox's Bazar",
  "Tangail",
  "Gazipur",
  "Narsingdi",
  "Faridpur",
  "Manikganj",
];

const conditions = ["used", "new"];

export default function FilterSidebar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const persistedMinPrice = searchParams.get("minPrice");
    const persistedMaxPrice = searchParams.get("maxPrice");
    const persistedCategories = searchParams.getAll("category");
    const persistedCity = searchParams.get("city");
    const persistedCondition = searchParams.get("condition");

    if (persistedMinPrice) setMinPrice(Number(persistedMinPrice));
    if (persistedMaxPrice) setMaxPrice(Number(persistedMaxPrice));
    if (persistedCategories.length > 0) setSelectedCategories(persistedCategories);
    if (persistedCity) setSelectedCity(persistedCity);
    if (persistedCondition) setSelectedCondition(persistedCondition);
  }, [searchParams]);

  const handleSearchQuery = (query: string, value: string | number | string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(query);

    if (Array.isArray(value)) {
      value.forEach((val) => params.append(query, val));
    } else {
      params.append(query, value.toString());
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    handleSearchQuery("category", updatedCategories);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    handleSearchQuery("city", city);
  };

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(condition);
    handleSearchQuery("condition", condition);
  };

  const handleMinPriceChange = (value: number) => {
    if (value < maxPrice) {
      setMinPrice(value);
      handleSearchQuery("minPrice", value);
    }
  };

  const handleMaxPriceChange = (value: number) => {
    if (value > minPrice) {
      setMaxPrice(value);
      handleSearchQuery("maxPrice", value);
    }
  };

  const handleClearFilters = () => {
    setMinPrice(0);
    setMaxPrice(100000);
    setSelectedCategories([]);
    setSelectedCity(null);
    setSelectedCondition(null);

    const params = new URLSearchParams();
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="p-6 bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-lg text-left text-light-primary-txt dark:text-dark-primary-txt">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button variant="primary" onClick={handleClearFilters} size="sm">
            Clear Filters
          </Button>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 text-left">Filter By Price</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Minimum Price</h3>
            <Slider min={0} max={100000} step={1} value={[minPrice]} onValueChange={(value) => handleMinPriceChange(value[0])} className="w-full" />
            <p className="text-sm mt-2 text-light-secondary-txt dark:text-dark-secondary-txt font-medium">Selected Min Price: ${minPrice}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Maximum Price</h3>
            <Slider min={0} max={100000} step={1} value={[maxPrice]} onValueChange={(value) => handleMaxPriceChange(value[0])} className="w-full" />
            <p className="text-sm mt-2 text-light-secondary-txt dark:text-dark-secondary-txt font-medium">Selected Max Price: ${maxPrice}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Filter By Category</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="cursor-pointer"
              />
              <label htmlFor={category} className="text-light-secondary-txt dark:text-dark-secondary-txt font-medium cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Filter By City</h2>
        <div className="space-y-2">
          {locations.map((city) => (
            <div key={city} className="flex items-center space-x-2">
              <input
                type="radio"
                name="city"
                id={city}
                value={city}
                checked={selectedCity === city}
                onChange={() => handleCityChange(city)}
                className="cursor-pointer"
              />
              <label htmlFor={city} className="text-light-secondary-txt dark:text-dark-secondary-txt font-medium cursor-pointer">
                {city}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Filter By Condition</h2>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <input
                type="radio"
                name="condition"
                id={condition}
                value={condition}
                checked={selectedCondition === condition}
                onChange={() => handleConditionChange(condition)}
                className="cursor-pointer"
              />
              <label htmlFor={condition} className="text-light-secondary-txt dark:text-dark-secondary-txt font-medium cursor-pointer">
                {condition}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
