import fs from 'fs';
import { searchDependenciesInFragment } from './searchDependenciesInFragment';

export async function dependencyAnalizer(pathToJsonsFragments: string[]) {
  let mapOfDependencies = new Map<string, string[]>();

  for (const pathToJson of pathToJsonsFragments) {
    const json = fs.readFileSync(pathToJson, 'utf8');
    const mapWithAddedDependencies = searchDependenciesInFragment(json, pathToJson, mapOfDependencies);

    if (!mapWithAddedDependencies) {
      continue;
    }

    mapOfDependencies = mapWithAddedDependencies;
  }
}
