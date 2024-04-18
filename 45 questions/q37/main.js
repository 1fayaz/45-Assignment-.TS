function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript "; }
    console.log("creating a ".concat(size, " shirt with the  ").concat(printMessage, " printed on the shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "Ilove javascript");
