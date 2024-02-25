export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const current = haystack[i];
        if (current == needle) {
            return true;
        }
    }
    return false;
}

