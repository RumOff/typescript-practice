function nomalizeSpace(input: string): string {
    let result = "";
    let str = input.trim();
    let flg = false;
    
    for (const ch of str) {
        if (ch === " " || ch === "　") {
            if (!flg) {
                result += " ";
                flg = true;
            }
        } else {
            result += ch;
            flg = false;
        }
    }

    return result;
}
