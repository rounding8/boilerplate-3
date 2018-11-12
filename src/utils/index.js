
const utils = {
    sortArray   : (array, key) => array.sort((str1, str2) => str1[key].localeCompare(str2[key])),
    toTitleCase : text => text.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
}

export default utils;
