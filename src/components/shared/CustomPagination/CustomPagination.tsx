/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { TMeta } from "@/types/global.types";
import { usePathname, useRouter } from "next/navigation";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import React, { useEffect, useState } from "react";

type TPaginationProductProp = {
  meta: TMeta;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
};

export function CustomPagination({ meta }: TPaginationProductProp) {
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    router.push(`${pathname}?page=${page}`);
  }, [page]);

  // Generate page numbers dynamically
  const pages = Array.from({ length: meta?.totalPage || 1 }, (_, index) => index + 1);

  // Ensure the page is always within valid bounds
  useEffect(() => {
    if (page > meta?.totalPage) {
      setPage(1); // Reset to first page if the current page is invalid
    }
  }, [meta?.totalPage, setPage]);

  // Handle page click
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber <= meta.totalPage) {
      setPage(pageNumber);
    } else {
      setPage(1); // Reset if the selected page exceeds available pages
    }
  };

  // Handle next page navigation
  const handleNext = () => {
    if (page < meta.totalPage) {
      setPage(page + 1);
    }
  };

  // Handle previous page navigation
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <span>
              <GrFormPrevious
                onClick={handlePrevious}
                className={` text-3xl ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-primary hover:cursor-pointer"}`}
              />
            </span>
          </PaginationItem>

          {/* Page Numbers */}
          {pages.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => handlePageClick(pageNumber)}
                className={`${
                  page === pageNumber ? "bg-primary-btn-bg font-medium text-white shadow" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } rounded px-4 py-2 hover:cursor-pointer`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <span>
              <GrFormNext
                onClick={handleNext}
                className={`text-3xl ${page === meta?.totalPage ? "opacity-50 cursor-not-allowed" : "hover:text-primary hover:cursor-pointer "}`}
              />
            </span>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
