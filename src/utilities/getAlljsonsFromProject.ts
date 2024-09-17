import { readdir, stat } from 'fs/promises';

export async function getAlljsonsFromProject(projectPath: string, jsons: string[] = []) {
  const directoriesEntries = await readdir(projectPath);

  for (const diEntry of directoriesEntries) {
    const diPath = `${projectPath}/${diEntry}`;
    const diStat = await stat(diPath);

    if (diStat.isDirectory()) {
      await getAlljsonsFromProject(diPath, jsons);
    }

    if (diEntry.endsWith('.json')) {
      jsons.push(diPath);
    }
  }
  return jsons;
}
