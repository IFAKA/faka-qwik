import type { IProject } from "~/models";

const filterRepos = (repos: IProject[]) =>
  repos.filter(({ tags, desc }) => tags.length !== 0 && desc !== "");
export default filterRepos;
