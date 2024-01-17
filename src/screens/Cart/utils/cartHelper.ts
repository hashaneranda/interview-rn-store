export function calculateTotalPrice(items: any) {
  if (!Array.isArray(items)) {
    return 0;
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return roundedTotalPrice;
}

export function removeItemFromCart(items: any, itemToRemove: any) {
  if (!Array.isArray(items)) {
    throw new Error('Input must be an array of items');
  }

  const newArray = items.filter(item => {
    return item.title !== itemToRemove.title || item.category !== itemToRemove.category || item.price !== itemToRemove.price;
  });

  return newArray;
}
