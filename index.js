/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const uniqueItems = Array.from(new Set(items));
  return uniqueItems;
};

module.exports = removeDuplicateItems;
