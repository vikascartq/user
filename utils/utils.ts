export function sliceCharacters(str: string, length: number, isEllipsis?: boolean): string {
    if (str.length <= length) return str;

    let trimmedStr = str.slice(0, length);
    const lastSpace = trimmedStr.lastIndexOf(" ");

    if (lastSpace > 0) {
        trimmedStr = trimmedStr.slice(0, lastSpace);
    }

    // Remove common punctuation marks right at the end of the string
    trimmedStr = trimmedStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]+$/, "");

    return trimmedStr + (isEllipsis ? "..." : "");
}
