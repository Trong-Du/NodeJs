//////Giai phuong trinh bac 2 ax^2 + bx + c = 0

ptb2 = (a, b, c) => {

    if (a == 0) return undefined;
    var result = {
        x1: undefined,
        x2: undefined

    };
    if (a + b + c == 0) {
        result.x1 = 1;
        result.x2 = c / a;
        return result;
    }
    if (a - b + c == 0) {
        result.x1 = -1;
        result.x2 = -c / a;
        return result;
    }
    var delta = calDelta(a, b, c);
    if (delta < 0) return "Phuong trinh vo nghiem";
    if (delta == 0) {
        result.x1 = result.x2 = -b / (2 * a);
        return result;
    }
    result.x1 = (-b + Math.sqrt(delta)) / (2 * a);
    result.x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return result;
    // return a !== 0 ? -b / a : undefined;
}

calDelta = (a, b, c) => {
    return b ** 2 - 4 * a * c;
}

console.log(ptb2(2, -7, 3));

console.log(ptb2(3, 2, 5));

console.log(ptb2(1, -8, 16));

console.log(ptb2(2, -3, 1));

console.log(ptb2(3, 5, 2));

console.log(ptb2(0, -3, 1));

