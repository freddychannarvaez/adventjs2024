function createXmasTree(height: number, ornament: string): string {
  function createTreeRow(treeIndex: number, length: number, char: string): string {
  const elements = getTreeElementsInRow(treeIndex);
  // console.log(elements);
  const spaces = (length - elements) / 2;
  // console.log(spaces);
  const result = `${'_'.repeat(spaces) + char.repeat(elements) + '_'.repeat(spaces) + '\n'}`;
  // console.log(result);
  return result;
}

function getTreeElementsInRow(index: number): number {
  const result = (2 * index) - 1;
  // console.log(result);
  return result;
}
  let result = '';
  const xLength = (height * 2) - 1;
  const endOfTreeSpace = (xLength - 1) / 2;
  const endOfTree1 = '_'.repeat(endOfTreeSpace) + '#' + '_'.repeat(endOfTreeSpace);
  const endOfTree2 = ''.concat(endOfTree1);
  //console.log(endOfTree1);
  //console.log(endOfTree2);
  
  for (let i = 1; i <= height; i++) {
      const row = createTreeRow(i, xLength, ornament);
      result = result.concat(row);
  }
  result = result.concat(endOfTree1, '\n' , endOfTree2);
  //console.log(result);
  return result;
}