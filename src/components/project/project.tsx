import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { IProject } from "~/models";

export default component$(({ project }: { project: IProject }) => {
  const { code, site, name, desc, tags } = project;
  return (
    <tr class="border-stone-700 odd:bg-slate-100">
      <td class="px-2">
        <Link
          href={code}
          title={`${name}'s code`}
          target="_blank"
          rel="noopener noreferrer"
          class="underline text-blue-700 visited:text-purple-700 mb-0.5 font-semibold"
        >
          {name}
        </Link>
      </td>
      <td class="px-2">{desc}</td>
      <td class="px-2">{tags}</td>
      <td class="px-2">
        {site && (
          <Link
            href={site}
            title={`${name}'s site`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex justify-center w-full"
          >
            🔗
          </Link>
        )}
      </td>
    </tr>
  );
});
