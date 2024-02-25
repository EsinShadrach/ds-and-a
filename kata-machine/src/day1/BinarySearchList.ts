export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        let midpoint = Math.floor(low + (high - low) / 2);
        let value = haystack[midpoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    }

    return false;

    // let low = 0;
    // let high = haystack.length;
    // // let high = haystack.length - 1;
    // // Later use this as high

    // do {
    //     /// This is the middle point of our array
    //     // so let's say out array is of length 10
    //     // it's 0 + 10 - 0 / 2 => 5
    //     let midpoint = Math.floor(low + (high - low) / 2);
    //     // this is the value of the middle point of our array
    //     const value = haystack[midpoint];
    //     // We've found the value if it is same as out needle
    //     if (value == needle) {
    //         return true;
    //     } else if (value > needle) {
    //         // In this situation out value is greater than out needle, so everything on the left hand side can't be it
    //         // so we switch the values
    //         // so in the case where the array is of length 10
    //         // then the midpoint would be 5
    //         // so if in the next loop if the value is  > needle
    //         // we make the high the middle
    //         // so now we'd have 0 + (5 - 0) / 2 => 2.5 (floored)
    //         // so value is the index of 2.5 floored (2)
    //         high = midpoint;
    //     } else {
    //         low = midpoint + 1;
    //     }
    // } while (low < high);

    // return false;
}

