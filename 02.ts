// Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

// Rules:

// Given an array of names, you must create a rectangular frame that contains all of them.
// Each name must be on a line, aligned to the left.
// The frame is built with * and has a border one line thick.
// The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
// Example of how it works:

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Expected result:
// ********
// * midu *
// ********

// createFrame(['a', 'bb', 'ccc'])

// // Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// createFrame(['a', 'bb', 'ccc', 'dddd'])

function createFrame(names: string[]): string {
  // Code here
  let result = '';
  // Get longest length
  let max = 0;
  names.map((el) => el.length > max ? max = el.length : null)
  // console.log('max', max)
  // Create first and last lines
  let frameBorder = ''.padStart(max, '*');
  frameBorder = frameBorder.concat('****')
  // console.log('frameBorder', frameBorder);
  result = result.concat(...frameBorder + '\n');
  names.map((x) => result = result
    .concat('* ' +
    x +
    ''.padStart((frameBorder.length - x.length - 4), ' ') +
    ' *\n'));
  result = result.concat(...frameBorder);
  // console.log('');
  // console.log(result);
  // result.concat()
  // Append names and add *
  return result
}