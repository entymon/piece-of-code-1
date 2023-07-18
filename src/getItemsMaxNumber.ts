const getItemsMaxNumber = (items: { name: string; }[]): number => {
  const regExp = /\d+/g;
  let max = 0;
  for (const item of items) {
    const matches = item.name.match(regExp)
    if (matches) {
      const numberMatches: number[] = [];

      for (const s in matches) {
        numberMatches.push(Number(s))
      }
      const next = Math.max(...numberMatches);
      if (next > max) max = next;
    }
  }
  return max;
}

export default getItemsMaxNumber;