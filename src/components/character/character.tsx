import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { ICharacter } from "~/models/character";

export default component$(({ character }: { character: ICharacter }) => {
  const { name, image, id } = character;
  return (
    <li>
      <img src={image} alt={name} />
      <br />
      <Link href={`details/${id}`}>{name}</Link>
    </li>
  );
});
