function normalizeString(input: string): string {
    let str = "";
    let result = "";
    let ck = false;

    str = input.trim();
    str = str.toLowerCase();

    for (const ch of str) {  
        if (ch === " ") {
            if (!ck) {
                ck = true;
                result += ch;
            }
        } else {
            result += ch;
            ck = false;
        }
    }
    return result;
}

console.log(normalizeString("  Hello   World  "));
console.log(normalizeString("HELLO WORLD"));
console.log(normalizeString(""));
console.log(normalizeString("  ABC   DEF GHI  "));
console.log(normalizeString("TypeScript"));