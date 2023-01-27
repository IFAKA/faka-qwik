import { reposAdapter } from "~/adapters";
import type { Repo } from "~/models";
import { URL } from "~/services";
import { filterRepos } from "~/utils";

export const getRepos = async () => {
  const data = await fetch(URL, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });
  if (!data.ok) throw new Error("Oops");
  const rawRepos: Repo[] = await data.json();
  const adaptedRepos = reposAdapter(rawRepos);
  const filteredRepos = filterRepos(adaptedRepos);
  return filteredRepos;
};
