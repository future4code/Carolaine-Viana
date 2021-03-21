export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
    name: string,
    CPF: string, //pra receber . por isos string
    dateOfBirth: Date,
    balance: number, //saldo
    statement: Array<Transaction> //array do tipo transacoes
}

