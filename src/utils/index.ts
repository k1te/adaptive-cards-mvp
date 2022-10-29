export function parseTemplateLiteral(expression, valueObj) {
    const match = /\${\s?([^{}\s]*)\s?}/g
    return expression.replace(match, (substring, value) => {
        let val = value.split('.')
        let tempPath = valueObj
        val.forEach(item => { tempPath = tempPath[item] })
        return tempPath
    })
}

export function parseTemplateLiteralToString(expression) {
    const match = /\${\s?([^{}\s]*)\s?}/g
    return expression.replace(match, (substring, value) => {
        return value
    })
}