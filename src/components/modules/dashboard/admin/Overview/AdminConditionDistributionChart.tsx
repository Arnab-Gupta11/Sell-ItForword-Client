"use client";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TAdminListingConditionDistribution } from "@/types/adminMetadat.types";
import React from "react";
import { Label, Pie, PieChart } from "recharts";

const AdminConditionDistributionChart = ({ data }: { data: TAdminListingConditionDistribution[] }) => {
  const chartData = data.map((item) => ({
    condition: item.condition,
    listings: item.count, // Adjust multiplier as needed
    fill: item.condition === "used" ? "#1E8DFF" : "#50a3f5",
  }));

  const chartConfig = {
    condition: {
      label: "Condition",
    },
    used: {
      label: "Used listings",
      color: "#1E8DFF",
    },
    new: {
      label: "New listings",
      color: "#50a3f5",
    },
  } satisfies ChartConfig;
  const totalListings = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.listings, 0);
  }, []);
  return (
    <div className="p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <div className="flex items-center gap-2 font-medium leading-none">Condition-wise Listing Distribution</div>
      {data && (
        <div>
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] bs:max-h-[200px] xl:max-h-[300px] mt-5">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-dark-primary-txt shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]" />
                }
              />
              <Pie data={chartData} dataKey="listings" nameKey="condition" innerRadius={60} strokeWidth={5}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-light-primary-txt dark:fill-dark-primary-txt text-3xl font-bold text-dark-primary-txt"
                          >
                            {totalListings.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-light-secondary-txt dark:fill-light-secondary-txt">
                            Listings
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="condition" />} className=" flex-wrap gap-2 justify-center" />
            </PieChart>
          </ChartContainer>
          <div className="leading-none text-[#525c6e] dark:text-[#bad9e8] text-center my-5">
            Visual representation of listings based on their condition (new vs. used).
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminConditionDistributionChart;
