"use client";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TAdminCategoryDistribution } from "@/types/adminMetadat.types";
import { useTheme } from "next-themes";
import React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const AdminCategoryDistributionChart = ({ data }: { data: TAdminCategoryDistribution[] }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const chartData = [...data];

  const chartConfig = {
    count: {
      label: "Listings",
      color: "#1E8DFF",
    },
  } satisfies ChartConfig;
  return (
    <div className="p-4 rounded-lg bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-[#e9ebec] dark:border-[#142e3a] shadow-sm shadow-[#e9ebec] dark:shadow-[#142e3a]">
      <div className="flex items-center gap-2 font-medium leading-none">Category-wise Listing Distribution</div>
      {data && (
        <div>
          <ChartContainer config={chartConfig} className="max-h-[300px] mt-5 mx-auto">
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="5 5"
                stroke="currentColor"
                className="text-gray-300 dark:text-[#284450]" 
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="categoryName"
                tickLine={true}
                tickMargin={10}
                tick={{ fill: isDarkMode ? "#ffffff" : "#333333", fontSize: 12, fontWeight: "medium" }}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                className="fill-dark-primary-txt text-dark-primary-txt"
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-dark-primary-txt shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]" />
                }
              />
              <Bar dataKey="count" fill="var(--color-count)" radius={8}>
                <LabelList position="top" offset={10} className="fill-light-secondary-txt dark:fill-light-secondary-txt font-medium" fontSize={12} />
              </Bar>
            </BarChart>
          </ChartContainer>
          <div className="leading-none text-[#525c6e] dark:text-[#bad9e8] text-center my-5">Displays the number of listings in each category.</div>
        </div>
      )}
    </div>
  );
};

export default AdminCategoryDistributionChart;
