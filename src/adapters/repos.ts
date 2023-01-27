import type { IProject, Repo } from "~/models";
import { firstCharUpper } from "~/utils";

export const reposAdapter = (apiRes: Repo[]): IProject[] =>
  apiRes?.map((repo) => ({
    id: repo.id,
    code: repo.html_url ?? "",
    site: repo.homepage ?? "",
    name: firstCharUpper(repo.name).replace(/-/g, " "),
    desc: repo.description ?? "",
    tags: repo.topics.join(", "),
  }));
