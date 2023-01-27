import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getRepos } from "~/api/getRepos";
import Project from "~/components/project/project";
import type { IProject } from "~/models";

export default component$(() => {
  const reposRes = useResource$(() => getRepos());
  return (
    <>
      <Resource
        value={reposRes}
        onResolved={(projects) => (
          <table>
            <thead>
              <tr>
                <th class="px-2">Name</th>
                <th class="px-2">Description</th>
                <th class="px-2">Techonolgies</th>
                <th class="px-2">Site</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project: IProject) => (
                <Project project={project} key={project.id} />
              ))}
            </tbody>
          </table>
        )}
        onPending={() => <p>Loading...</p>}
      />
    </>
  );
});
