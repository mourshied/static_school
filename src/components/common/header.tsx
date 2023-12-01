import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Header(props) {
  return (
    <Box {...props}>
      {/* TODO: add an Image with 3 different aspect ratios. */}
      <Image
        src={"/images/banner.jpg"}
        width={100}
        height={500}
        alt="Logo of the School"
        layout="responsive"
      />
    </Box>
  );
}
