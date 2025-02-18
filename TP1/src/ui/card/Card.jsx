import Socialmedia from "../socialmedia/Socialmedia";

export default function Card({ somebody }) {
  let email = "";
  if (somebody.email != undefined) {
    email = <p className="text-xl text-emerald-400">{somebody.email}</p>;
  }
  return (
    <div className="bg-gray-200 w-1/4 flex flex-col items-left justify-center  rounded-lg p-4 ">
      <img
        src={somebody.avatar}
        alt="Description"
        className="rounded-lg mb-4"
      />
      <h1 className="text-2xl text-gray-900 font-bold">{somebody.name}</h1>
      {email}
      <p className="text-xl text-gray-900">{somebody.description}</p>
      <Socialmedia socials={somebody.socials} />
    </div>
  );
}
