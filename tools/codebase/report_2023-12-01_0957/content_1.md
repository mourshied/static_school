*** ../next.config.js ***
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
--------------------------------------------------
*** ../.devcontainer/Dockerfile ***
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.236.0/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"
--------------------------------------------------
*** ../.devcontainer/devcontainer.json ***
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.236.0/containers/typescript-node
{
	"name": "Static School Website Template",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version: 18, 16, 14.
		// Append -bullseye or -buster to pin to an OS version.
		// Use -bullseye variants on local on arm64/Apple Silicon.
		"args": { 
			"VARIANT": "18-bullseye"
		}
	},

	// Configure tool-specific properties.
	"customizations": {
		// Configure properties specific to VS Code.
		"vscode": {
			// Add the IDs of extensions you want installed when the container is created.
			"extensions": [
				"dbaeumer.vscode-eslint",
				"eamodio.gitlens",
				"mhutchie.git-graph",
				"esbenp.prettier-vscode",
				"ms-vscode.vscode-typescript-tslint-plugin",
				"ms-vsliveshare.vsliveshare",
				"streetsidesoftware.code-spell-checker",

			]
		}
	},

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [8080],
	"waitFor": "onCreateCommand",
    "updateContentCommand": "yarn install",
    "postAttachCommand": "yarn dev",
	// Use 'postCreateCommand' to run commands after the container is created.
	"postCreateCommand": "pnpm dev",

	// Comment out to connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node",
	"portsAttributes": {
        "3000": {
            "label": "Application",
            "onAutoForward": "openPreview"
        }
    },
    "forwardPorts": [3000]
}
--------------------------------------------------
*** ../next-env.d.ts ***
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
--------------------------------------------------
*** ../tailwind.config.ts ***
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
--------------------------------------------------
*** ../package.json ***
{
  "name": "static-school-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "framer-motion": "^10.16.9",
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18",
    "sass": "^1.69.5"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
--------------------------------------------------
*** ../tsconfig.json ***
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
--------------------------------------------------
*** ../.vscode/settings.json ***
{
  "workbench.iconTheme": "vscode-icons",
  "typescript.check.tscVersion": false,
  "vsicons.projectDetection.disableDetect": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "eslint.autoFixOnSave": true,
  "tslint.autoFixOnSave": true
}--------------------------------------------------
*** ../postcss.config.js ***
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
--------------------------------------------------
*** ../.eslintrc.json ***
{
  "extends": "next/core-web-vitals"
}
--------------------------------------------------
*** ../src/components/styled/button.tsx ***
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

export default function StyledButton({ href="/", text=""}) {
  return (
    <Link href={href} passHref>
      <Button colorScheme="blue"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md">
        {text}
      </Button>
    </Link>
  );
}--------------------------------------------------
*** ../src/components/common/navbar.tsx ***
"use client";

// TODO: make this component responsive
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NAV_ITEMS from "../../data/navigation";
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
--------------------------------------------------
*** ../src/components/common/footer.tsx ***
"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";

//TODO: update with breezy system logo
const Logo = (props: any) => {
  return (
    <svg
      height={32}
      viewBox="0 0 100 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.5,1c-3.08984,0 -6.28125,1.79297 -7.8125,4.9375c-0.48437,1 -0.0625,2.20313 0.9375,2.6875c1,0.48438 2.20313,0.0625 2.6875,-0.9375c0.74609,-1.53516 2.85938,-2.6875 4.1875,-2.6875c1.98438,0 4.5,1.52734 4.5,4.5c0,2.99609 -2.50391,5.5 -5.5,5.5h-23.5c-0.0625,-0.00391 -0.125,-0.00391 -0.1875,0c-1.10547,0.05078 -1.95703,0.98828 -1.90625,2.09375c0.05078,1.10547 0.98828,1.95703 2.09375,1.90625h23.5c5.20703,0 9.5,-4.29297 9.5,-9.5c0,-5.22656 -4.40625,-8.5 -8.5,-8.5zM1.8125,23c-1.10547,0.05078 -1.95703,0.98828 -1.90625,2.09375c0.05078,1.10547 0.98828,1.95703 2.09375,1.90625h36.40625c0.0625,0.00391 0.125,0.00391 0.1875,0c4.12891,0.09766 7.40625,3.4375 7.40625,7.59375c0,2.04688 -0.875,3.64453 -2.1875,4.8125c-1.3125,1.16797 -3.08203,1.78125 -4.40625,1.78125c-2.38281,0 -4.5,-0.51562 -6.09375,-4.09375c-0.23047,-0.73437 -0.86328,-1.27344 -1.625,-1.38281c-0.76562,-0.10937 -1.52344,0.23047 -1.94922,0.875c-0.42578,0.64063 -0.44531,1.47266 -0.05078,2.13281c2.16406,4.85547 6.33594,6.46875 9.71875,6.46875c2.48047,0 5.02734,-1.00391 7.0625,-2.8125c2.03516,-1.80859 3.53125,-4.52734 3.53125,-7.78125c0,-6.26562 -5.02734,-11.37891 -11.25,-11.5625c-0.05078,-0.01172 -0.10547,-0.02344 -0.15625,-0.03125c-0.01953,0 -0.04297,0 -0.0625,0c-0.04297,0 -0.08203,0 -0.125,0h-36.40625c-0.0625,-0.00391 -0.125,-0.00391 -0.1875,0zM1.8125,30c-1.10547,0.05078 -1.95703,0.98828 -1.90625,2.09375c0.05078,1.10547 0.98828,1.95703 2.09375,1.90625h11.5c0.0625,0.00391 0.125,0.00391 0.1875,0c2.91016,0.10156 5.3125,2.56641 5.3125,5.5c0,1.46875 -0.58203,2.49609 -1.46875,3.28125c-0.88672,0.78516 -2.11328,1.21875 -3.03125,1.21875c-1.11328,0 -2.53516,-0.22266 -4,-2.1875c-0.38672,-0.66406 -1.12109,-1.04687 -1.88672,-0.98828c-0.76563,0.0625 -1.42969,0.55859 -1.70703,1.27344c-0.27734,0.71484 -0.12109,1.52734 0.40625,2.08984c2.21094,2.96094 5.16016,3.8125 7.1875,3.8125c2.01172,0 4.05469,-0.77734 5.6875,-2.21875c1.63281,-1.44141 2.8125,-3.65234 2.8125,-6.28125c0,-5.08984 -4.10937,-9.28516 -9.15625,-9.46875c-0.04297,-0.01172 -0.08203,-0.02344 -0.125,-0.03125c-0.03125,0 -0.0625,0 -0.09375,0c-0.04297,0 -0.08203,0 -0.125,0h-11.5c-0.0625,-0.00391 -0.125,-0.00391 -0.1875,0z"
        fill="#16558F"
      />
    </svg>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 Breezy Systems. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
--------------------------------------------------
*** ../src/components/common/header.tsx ***
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
--------------------------------------------------
*** ../src/components/layouts/landing.tsx ***
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Flex } from "@chakra-ui/react";
import Navbar from '../common/navbar'
import Header from '../common/header'
import Footer from '../common/footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: ' গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়',
//   description: 'TODO:  গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়, গৌরীপুর, ময়মনসিংহ',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto">
    <Header/>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Flex>
  )
}
--------------------------------------------------
*** ../src/components/feature/calendar.tsx ***
// TODO: wrapper for some calendar component that will render all the props
--------------------------------------------------
*** ../src/components/feature/annoucement.tsx ***
// TODO: complete list of announcements
--------------------------------------------------
*** ../src/components/pages/home/banner.tsx ***
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
  }--------------------------------------------------
*** ../src/data/navigation.tsx ***
export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Us",
    children: [
      {
        label: "Principal's Message",
        href: "/about/principals-message",
      },
      {
        label: "Mission Statement",
        href: "/about/mission-statement",
      },
      {
        label: "Staff",
        href: "/about/staff",
      },
      {
        label: "History",
        href: "/about/history",
      },
    ],
  },
  {
    label: "Academics",
    children: [
      {
        label: "Curriculum",
        href: "/academics/curriculum",
      },
      {
        label: "Departments",
        href: "/academics/departments",
      },
      {
        label: "Library",
        href: "/academics/library",
      },
      {
        label: "Counseling",
        href: "/academics/counseling",
      },
    ],
  },
  {
    label: "Students",
    children: [
      {
        label: "Portal",
        href: "/students/life",
      },
      {
        label: "Clubs & Activities",
        href: "/students/clubs",
      },
      {
        label: "Student Government",
        href: "/students/government",
      },
      {
        label: "Honors & Recognition",
        href: "/students/honors",
      },
    ],
  },
  {
    label: "Parents",
    children: [
      {
        label: "PTA",
        href: "/parents/pta",
      },
      {
        label: "Volunteer Opportunities",
        href: "/parents/volunteer",
      },
      {
        label: "Parent Resources",
        href: "/parents/resources",
      },
      {
        label: "FAQs",
        href: "/parents/faqs",
      },
    ],
  },
  {
    label: "Portal",
    href: "/portal",
  },
];

export default NAV_ITEMS;
--------------------------------------------------
*** ../src/assets/style/theme.tsx ***
import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Inter', ${defaultTheme.fonts.heading}`,
    body: `'Inter', ${defaultTheme.fonts.body}`,
  },
  breakpoints,
});

export default theme;--------------------------------------------------
*** ../src/pages/index.tsx ***
import type { NextPage } from "next";
import Home from "./home/index";

const Index: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Index;
--------------------------------------------------
*** ../src/pages/academics/index.tsx ***
// create a page to show all academic related informtaion. Get more product scope on this
--------------------------------------------------
*** ../src/pages/home/index.tsx ***
import React from "react";
import PropTypes from "prop-types";

import WelcomeBanner from "@/components/pages/home/banner";
function Home({
  title,
  subtitle,
  images,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <>
    {/* // TODO: update the welcomeBanner to include autoslide image carrousole from assets/images/photo_gallery */}
        <WelcomeBanner title={title} subtitle={subtitle} images={images}/>
        {/* TODO: Create component to show all important links */}
        {/* Create component to show Annountments */}
        {/* Create Components to show all the calendar events*/}
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Home.defaultProps = {
  title: "গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়ের ওয়েব সাইটে আপনাকে স্বাগতম",
  subtitle:
    "TODO: This is the subheader section where you the mission statement",
//   images: "https://source.unsplash.com/collection/404339/800x600",
images: "/images/photo/1.JPG",

  ctaLink: "/about"
};

export default Home;

--------------------------------------------------
*** ../src/pages/about/index.tsx ***
// container school location, history,
--------------------------------------------------
*** ../src/pages/about/facultyMessages.tsx ***
// // 	<font size="4pt" color="blue"> <strong>~CHAIRMAN'S MESSAGE:~</font></strong><br>

// In the present era of science and outstanding achievement in information-technology era.
// In the modern world of science and information technology is playing a role in the magic
// canes and wonderful. The education, science and the use of information technology already
// triggered massive to worldwide. In this context, the Bangladesh government to modernize
// the country's education system and the importance of science and information technology
// in all educational institutions to come up with a comprehensive program on the same network.
//  The modernization of the education system to respond to the call of the government's science-based
//  educational materials for all educational institutions have already started to use information
//  technology in their foremost the GHAHS. Academic and administrative activities to the more
//  dynamic and information technology friendly of the institute an information-rich web site
//  has been launched. Which will be also developed in phases. The modernization of the education
//  system for accomplishing
// the above-mentioned information-technology-centered activities as Chairman of the GHAHS,
// I am extremely glad of this. And my best wishes and
// congratulations
//  to everyone involved to this modernization program. Above all, I wish the institute's overall well-being.
//  - Md.Shamsuzzaman
// <img src="icon_image/sign_ch.jpg" align="right"style="height:62px; width:140px">
--------------------------------------------------
*** ../src/pages/about/staff.tsx ***
// create a page to show all the staff name, title, and image
--------------------------------------------------
*** ../src/pages/_document.tsx ***
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
--------------------------------------------------
*** ../src/pages/_app.tsx ***
// src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "../assets/style/index.scss"; // caustom css
import RootLayout from "../components/layouts/landing";
import theme from "@/assets/style/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RootLayout>
  );
}

export default App;
--------------------------------------------------
