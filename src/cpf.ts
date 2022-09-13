function normalizesToJustNumbers(cpf: string) {
    return cpf.replace(/[^\d]+/g, '')
}

function isAKnownInvalidCPF(cpf: string) {
    return cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
}

function checker(digits: string) {
    let sum = 0

    for (let i = 0; i < digits.length; ++i) {
        sum += Number(digits.charAt(i)) * ((digits.length) + 1 - i)
    }

    const modElevenOfTheSumTotal = sum % 11
    return modElevenOfTheSumTotal < 2 ? 0 : 11 - modElevenOfTheSumTotal
}

const isValid = (param: string) => {
    if (!param) return false
    const cpf = normalizesToJustNumbers(param)
    if (isAKnownInvalidCPF(cpf)) return false

    const firstNineDigit = cpf.slice(0, 9)
    const lastTwoDigit = cpf.slice(9, 11)

    const checkOne = checker(firstNineDigit)
    
    const firstNineDigitJoinWithCheckOne = `${firstNineDigit}${checkOne}`

    const checkTwo = checker(firstNineDigitJoinWithCheckOne)

    return lastTwoDigit === `${checkOne}${checkTwo}`
}

export const CPF = Object.freeze({
    isValid
})