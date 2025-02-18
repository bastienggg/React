import SocialIcon from "../socialIcon/SocialIcon.jsx";

export default function Socialmedia(props) {
  let liste = props.socials.map((s, index) => (
    <li key={index} className="w-10 h-10">
      <a href={s.url}>
        <SocialIcon name={s.name} />
      </a>
    </li>
  ));

  return <ul className="flex  gap-6 mt-4">{liste}</ul>;
}

// let liste = social.map((s, index) => (
//     <li key={index}>
//         <a href={s.url}>{s.name}</a>
//     </li>
// ));
// return (
//     <ul>
//         {liste}
//     </ul>
// )
