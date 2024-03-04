// function for show menu selected
export const menuItems = {
  pnl: ['/pnl-dashboard', '/pnl-item', '/pnl-by-category', '/parent-sku', '/group-by-pnl'],
  // ppc: ['/dashboard', '/ppc-item', '/ppc-category', '/group-by-ppc', '/ppc-by-parent'],
  sales: ['/sales-dashboard', '/sales-item', '/sales-category', '/group-by-sales', '/sales-by-parent'],
  items: ['/cogs-list', '/pnl-tags'],
  keywordtrackingmenu: ['/keyword-tracking']
};

export const parentMenuByChild = (child) => {
  for (const category in menuItems) {
    if (menuItems[category].includes(child)) {
      return category;
    }
  }
  return null;
};

// function for truncate the product name
export const productTruncate = (product) => {
  const maxLength = 80;
  return product && product?.length > maxLength ? product && product?.substring(0, maxLength) + '...' : product;
};

export const arrayMove = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

export const removeElementFromArray = (array, ItemValue) => {
  const index = array.indexOf(ItemValue);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const arrayMoveByValue = (arr, itemValue1, itemValue2) => {
  const new_index = arr.indexOf(itemValue1);
  const old_index = arr.indexOf(itemValue2);
  if (new_index && old_index && new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};
