export default function SocialIcon({ name }) {
  const allSocialmedia = {
    github: "./src/assets/github.png",
    insta: "./src/assets/insta.webp",
    meta: "./src/assets/meta.webp",
    default: "./src/assets/default.png",
  };

  if (!allSocialmedia[name]) {
    name = "default";
  }

  return <img src={allSocialmedia[{ name }]} />;
}
