import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from './accounts'

const app: Express = express()

app.use(express.json())
app.use(cors())

//criar uma nova conta bancaria
app.post("/users/create", (req: Request, res:Response)=>{
    try{
        //comecar destruturando o body pra pegar o nome, cpf, date..
        const {name, CPF, dateOfBirthAsString} = req.body // date: dia//mes//ano
        
        //tratar a data de nascimento
        const [day, month, year] = dateOfBirthAsString.split("/") //pega a data e coloca barra. [01, 01, 2020]. index1: dia, index:2 mes..etc
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`) //comeca com ano, mes dia
        
        // validar as entradas da requisicoes
        //idade maior que 18 anos
        //forma 01 de usar o date
        // const age: number = new Date().getTime() //data de hoje (da execucao do codigo)
        //forma 02 de usar o date
        const ageInMiliSeconds: number = Date.now() - dateOfBirth.getTime() //data de hoje (da execucao do codigo)
        //para de segundos para anos
        const ageInYears: number = ageInMiliSeconds / 1000 / 60 / 60 / 24 / 365 //passando de secundos para minitos etc depois horas depois anos
        
        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos!")
        }
        
        // consultar ou alterar a base de dados
        
        
        //add uma nova conta no meu array
        accounts.push({
            name, //valor do name do req.body...
            CPF,
            dateOfBirth, //o valor que vai recebe é do const
            balance: 0,
            statement: []
        })
        
        // valida o resultado da consulta
        
        // enviar a resposta
        res.status(201).send("conta criada com sucesso.")
        
    }
    
    catch(error){
        console.log(error) //mensagem do erro
        res.send(error.message) //se der erro vai cair no 400
    }
})

//visualizar

app.get("/users/all", (req: Request, res: Response)=>{
    try{
        //validar as consultas se o array ta vazio ou nao
        if(!accounts.length){   
            res.statusCode = 404
            throw new Error("nenhuma conta encontrada")
        } //se tiver vazio o length vai ser zero
    
        //consultar a base de dados
        res.status(200).send(accounts) //status de sucesso e enviar os accounts
    }
    
    catch(error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("servidor rodando na porta 3003")
})


