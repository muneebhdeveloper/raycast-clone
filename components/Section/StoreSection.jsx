import React from "react";
import SearchBox from "../SearchBox";
import Text from "../Typography/Text";

export default function StoreSection() {
  return (
    <div className="relative max-w-6xl mx-auto z-10">
      <div className="flex flex-col max-w-[550px] items-center mx-auto text-center mb-128 lg:mb-[256px]">
        <Text variant="h1">Store</Text>
        <Text variant="p">
          Sprinkle a little magic on your day. Connect your tools, and take your
          daily workflow to the next level.
        </Text>
        <SearchBox />
      </div>
    </div>
  );
}
