// import getItemsMaxNumber from ".";
import getItemsMaxNumber from './getItemsMaxNumber';

describe('getItemsMaxNumber', () => {
  
  test('returns 0 for non numeric value in the string', () => {
    const testData = [
      { name: 'item test' },
      { name: 'item dog' },
      { name: 'item cat' },
      { name: 'item astro' },
      { name: 'item three' }
    ];

    expect(getItemsMaxNumber(testData)).toBe(0);
  })
  test('returns the string with max numeric value in the string', () => {
    const testData = [
      { name: 'item 1' },
      { name: 'item 2 item 34' },
      { name: 'item 11' },
      { name: 'item 3' },
      { name: 'item 10' }
    ];

    expect(getItemsMaxNumber(testData)).toBe(34);
  })
})

getItemsMaxNumber([{name: 'string'}]);