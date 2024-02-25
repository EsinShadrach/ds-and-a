fn main() {
    let sort_me = vec![1, 3, 6, 2, 9, 4];
    let sorted_arr = bubble_sort(sort_me);
    println!("{:?}", sorted_arr);
}

fn bubble_sort(mut arr: Vec<u8>) -> Vec<u8> {
    let mut is_swapped = true;

    while is_swapped {
        is_swapped = false;
        let length = arr.len();

        for i in 0..length - 1 {
            let current = arr[i];
            let next = arr[i + 1];

            if current > next {
                arr[i] = next;
                arr[i + 1] = current;
                is_swapped = true;
            }
        }
    }
    return arr;
}

// the o of n for this woudl be O(n *  n) cause firslt there are 2 loops
// which are nested, so the operation happens twice
