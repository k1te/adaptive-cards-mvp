export function parseTemplateLiteral(expression: string, valueObj: object): string {
    return expression.replace(/\${\s?([^{}\s]*)\s?}/g, (_substring: string, value: string): string => {
        const val = value.split('.')
        let tempPath: any = valueObj
        val.forEach((item: string) => {
            tempPath = tempPath[item]
        })
        return tempPath
    })
}

export function parseTemplateLiteralToString(expression: string): string {
    return expression.replace(/\${\s?([^{}\s]*)\s?}/g, (_substring, value) => {
        return value
    })
}

export function parseMarkdown(text: string): string {
    const bold = /\*\*(.*?)\*\*/gm
    return text.replace(bold, '<strong>$1</strong>')
}
