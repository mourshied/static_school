import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import StyledButton from "@/components/styled/button";

export default function WelcomeBanner({
    title,
    subtitle,
    images= "https://source.unsplash.com/collection/404339/800x600",
    ctaLink,
    ...rest
  }) {
    return (
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            {subtitle}
          </Heading>
          <StyledButton href={ctaLink} text={"Learn More"}/>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          {/* TODO: Make this change every X secs, with a list of images */}
          <Image src={images} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    );
  }