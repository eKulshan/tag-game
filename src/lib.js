export const createField = (opt = 'random') => {
  const values = [...Array(15).keys()]
    .map((x) => x + 1)
    .sort((a, b) => (opt === 'sorted' ? a.val - b.val : Math.random() - 0.5))
    .concat('');

  const cells = [];

  for (let i = 0; i <= 15; i += 1) {
    const left = i % 4;
    const top = (i - left) / 4;
    cells.push(
      { val: values[i], pos: { left, top } },
    );
  }

  return cells;
};

export const isAllowedMove = (cell, emptyCell) => {
  const leftDiff = Math.abs(cell.pos.left - emptyCell.pos.left);
  const topDiff = Math.abs(cell.pos.top - emptyCell.pos.top);

  if ((leftDiff + topDiff) > 1) {
    return false;
  }

  return true;
};

const fieldWin = JSON.stringify(createField('sorted').sort((a, b) => a.val - b.val));

export const isWin = (field) => JSON.stringify(field.sort((a, b) => a.val - b.val)) === fieldWin;
