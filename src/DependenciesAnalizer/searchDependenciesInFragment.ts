export function searchDependenciesInFragment(
  jsonFileString: string,
  pathToJson: string,
  mapOfDependencies: Map<string, string[]>,
) {
  const regex = new RegExp(/addDependency\("(.*)"\)/, 'g');

  const matchs = regex.exec(jsonFileString);

  if (!matchs) {
    return;
  }

  return mapOfDependencies.set(pathToJson, matchs);
}
