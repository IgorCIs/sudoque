const replaceItems = (arr, item, value) => {
    let newArr = [...arr]
    newArr[item] = value
    return newArr
}

const doesAddValue = (arr, value, add) => {
    let newArr = [...arr]
    add && newArr.push(value)
    return newArr
}

export {
    doesAddValue,
    replaceItems
}