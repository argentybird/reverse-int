module.exports = function reverse(x) {

    if (x < 0) {
        x = x * (-1);
    }

    x = String(x);
    x = x.split("");
    x = x.reverse();
    x = x.join("");

    x = Number(x);
    return x;
}