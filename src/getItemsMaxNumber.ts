const getItemsMaxNumber = (items: { name: string; }[]): number => {
  const regExp = /\d+/g;
  let max = 0;
  for (const i in items) {
    const match = items[i].name.match(regExp)
    const next = match && match.length === 1 ? Number(match[0]) : 0;
    if (next > max) max = next;
  }
  return max;
}

export default getItemsMaxNumber;