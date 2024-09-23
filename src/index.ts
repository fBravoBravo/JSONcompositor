import { getAlljsonsFragments } from './utilities/getAlljsonsFragments';

async function main() {
  const pathToAllFragments = await getAlljsonsFragments(process.cwd());

  console.log(pathToAllFragments);
}
