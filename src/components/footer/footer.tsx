import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { CONTACTS } from "~/services";

export default component$(() => {
  return (
    <div class="max-w-xs w-full flex justify-around items-center">
      {CONTACTS.map(({ href, title }) => (
        <Link
          href={href}
          key={(href = "")}
          title={title}
          class="underline text-blue-700 visited:text-purple-700 mb-0.5"
        >
          {title}
        </Link>
      ))}
    </div>
  );
});
