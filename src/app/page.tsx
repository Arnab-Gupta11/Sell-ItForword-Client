import { ThemeToggler } from "@/components/shared/ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Button className="bg-primary-btn-bg">Test</Button>
      <ThemeToggler />
    </div>
  );
};

export default HomePage;
