import FigmaIcon from "../icon/FigmaIcon";
import GithubIcon from "../icon/GithubIcon";
import WebIcon from "../icon/WebIcon";
import { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  image: string;
  stack: string;
  description: string;
  tags: string[];
  actions: {
    label: string;
    icon: () => JSX.Element;
    href: string;
  }[];
}
[];

export const projects: Project[] = [
  {
    id: 1,
    title: "Airstream Cooling Systems",
    image: "/images/airstream_img.png",
    stack: "frontend",
    description:
      "A modern company platform built for Airstream Cooling Systems Ltd, enabling customers to easily request HVAC and refrigeration services online.",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Typescript", "Shadcn-UI"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/4LNv7iDhzfJibrMmHAUVQ7/Alphy1027?node-id=0-1&t=mNOuN6HjQuNMUAc7-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/air-stream",
      },
      {
        label: "web",
        icon: WebIcon,
        href: "https://www.airstreamke.co.ke/",
      },
    ],
  },
  {
    id: 2,
    title: "Kavijoy Safari Resort",
    image: "/images/kavijoy_img.png",
    stack: "frontend",
    description:
      "Modern website built for Kavijoy safari resort which enables potential customers looking for gateaway resort to browse services, facilities and activities",
    tags: ["Node JS", "Express JS", "MongoDB", "Mongoose", "Javascript", "JWT Auth"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app-backend",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app-backend",
      },
      {
        label: "web",
        icon: WebIcon,
        href: "https://kavijoy-safari-resort.netlify.app",
      },
    ],
  },
  {
    id: 3,
    title: "Alphy1027",
    image: "/images/star-auto-cars_img.png",
    stack: "frontend",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features project previews, resume links,  skills, and ways to get in touch.",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Typescript"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/air-stream",
      },
      {
        label: "web",
        icon: WebIcon,
        href: "https://dev-portfolio-tawny-omega.vercel.app/",
      },
    ],
  },
  /* {
    id: 4,
    title: "Fralon Peanuts",
    image: "",
    stack: "frontend",
    description:
      "A responsive and user-friendly frontend for Fralon Peanuts, a small family-run business selling peanut butter and groundnut-based products.This web application allows users to browse products, log in or sign up, manage their cart, and place orders. Built with a scalable frontend architecture and mobile-first UI.",
    tags: ["React", "Tailwind CSS", "Typescript", "Axios", "Tanstack Query", "Framer Motion"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/kJYDGdfkF29EkeNqclm6sF/Fralon-Design?node-id=0-1&t=IZ5zKkdzV6P1QN66-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app",
      },
      {
        label: "web",
        icon: WebIcon,
        href: "https://fralon-peanuts.netlify.app/",
      },
    ],
  }, */
];
