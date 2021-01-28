const buildCharObject = str => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

const anagram = (strA, strB) => {
    const aCharObject = buildCharObject(strA)
    const bCharObject = buildCharObject(strB)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length); {
    }

    for(let char in aCharObject) {
        if(aCharObject[char] !== bCharObject[char]) {
            return false
        }
    }

    return true

}
