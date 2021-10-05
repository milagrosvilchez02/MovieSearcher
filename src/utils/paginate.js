import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // to paginate the data first we need to calculate the starting
  // index of the items on this page (pageNumber)
  const startIndex = (pageNumber - 1) * pageSize;

  // Now we can use lodash to go to this startIndex and take all
  // the items for the current page.

  // This method will slice our array starting from startIndex
  // _.slice(items, startIndex);

  // Now that we have a new array we can go to this array and
  // pick items for the current page. Lodash has a method for that.
  // The take method: we give it an array and the total number of
  // items we wanna take from that array.

  // In order to call this methods using a chain, first we need to
  // convert this items array to a lodash wrapper:
  // _(items);
  // This will return a lodash object and with that we can chain all
  // the lodash methods like this:
  return _(items).slice(startIndex).take(pageSize).value();
}
