import { describe, expect, it } from "vitest"
import faker from "faker-br"
import { CPF } from "./cpf";

describe("cpf test", () => {
    it("Shoud return fals to all know invalid CPF", () => {
        const knowInvalidCPFs = [
            "000-000-000-00",
            "111-111-111-11",
            "222-222-222-22",
            "333-333-333-33",
            "444-444-444-44",
            "555-555-555-55",
            "666-666-666-66",
            "777-777-777-77",
            "888-888-888-88",
            "999-999-999-99",
            "00000000000",
            "11111111111",
            "22222222222",
            "33333333333",
            "44444444444",
            "55555555555",
            "66666666666",
            "77777777777",
            "88888888888",
            "99999999999",
            "",
        ]

        const someTrue = knowInvalidCPFs.some(CPF.isValid)
        expect(someTrue).toBeFalsy()
    })

    it("Shoult return true for all random valid CPF", () => {
        const everyIsValid = new Array(10000).map(v => faker.br.cpf()).every(CPF.isValid)
        expect(everyIsValid).toBeTruthy()
    })
})