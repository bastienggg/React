import React from "react";
import Card from "./ui/card/Card.jsx";

export default function App() {
  let somebody = [
    {
      name: "Cars",
      avatar: "./src/assets/pp1.jpg",
      email: "cars@etu.unilim.fr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: [
        { name: "github", url: "https://github.com/bastienggg" },
        { name: "insta", url: "https://www.instagram.com/" },
      ],
    },
    {
      name: "Cars",
      avatar: "./src/assets/pp2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: [
        { name: "github", url: "https://github.com/bastienggg" },
        { name: "insta", url: "https://www.instagram.com/" },
      ],
    },
    {
      name: "Cars",
      avatar: "./src/assets/default.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: [
        { name: "github", url: "https://github.com/bastienggg" },
        { name: "insta", url: "https://www.instagram.com/" },
      ],
    },
  ];

  return (
    <section className="flex flex-row justify-left items-center flex-wrap gap-4">
      <Card somebody={somebody[0]} />
      <Card somebody={somebody[1]} />
      <Card somebody={somebody[2]} />
    </section>
  );
}
