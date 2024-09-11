import { readdir } from 'fs/promises';

export async function getAlljsonsFromProject(projectPath: string) {
  const directoryEntries = await readdir(projectPath);
  const jsonFragmentsFiles = [];

  for (const entry of directoryEntries) {
    if (entry.isDirectory()) {
      jsonFragmentsFiles.push(...(await getAlljsonsFromProject(entry.path)));
    } else {
      if (entry.name.endsWith('.fragment.json')) {
        jsonFragmentsFiles.push(entry.path);
      }
    }
  }
  files.filter((file) => file.endsWith('.fragment.json'));
}
