import React from "react";
import { BarSearch } from "components/barSearch";
import { Card } from "components/card";

export const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <BarSearch />
      <div className="w-[75%] max-w-[380px] sm:w-[60%] sm:max-w-none">
        <Card />
      </div>
    </div>
  );
};
