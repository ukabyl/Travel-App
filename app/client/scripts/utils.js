function upperCaseArray(text) {
    var result = text.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
    return result.split(",");
}

export {
    upperCaseArray
}