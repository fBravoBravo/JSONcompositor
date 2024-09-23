import { readdir, stat } from 'fs/promises';

export async function getAlljsonsFragments(projectPath: string, jsons: string[] = []) {
  const directoriesEntries = await readdir(projectPath);

  for (const diEntry of directoriesEntries) {
    const diPath = `${projectPath}/${diEntry}`;
    const diStat = await stat(diPath);

    if (diStat.isDirectory()) {
      await getAlljsonsFragments(diPath, jsons);
    }

    if (diEntry.endsWith('.fragment.json')) {
      jsons.push(diPath);
    }
  }
  return jsons;
}
