function capitalize(str) {
    if (!str || typeof str !== "string") {
        return "";
    }
        return str[0].toUpperCase() + str.slice(1);
    }

function reverse(str) {
    if (typeof str !=="string") return "";

// [...str] handles emoji better than split('') because it works with Unicode code points.
    return [...str].reverse().join("");
}

function isPalindrome(str) {
    if (typeof str !=="string") return false;
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    return cleaned === [...cleaned].reverse().join("");
}

function wordCount(str) {
    if (typeof str !== "string" || str.trim() === "") return 0;
    return str.trim().split(/\s+/).length;
}

function charCount(str) {
    if (typeof str !== "string") return 0;
    return str.replace(/\s/g,"").length;
}

module.exports = {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    charCount,
};