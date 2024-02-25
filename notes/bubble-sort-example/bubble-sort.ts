function bubbleSort(arr: number[]) {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let next = arr[i + 1];

      if (next > current) {
        arr[i + 1] = current;
        arr[i] = next;
        isSwapped = true;
      }
    }
  }

  return arr;
}

function main() {
  console.log("apples are red");
  const mySort = bubbleSort([3, 1, 5, 6, 9]);
  console.log(mySort);
}
