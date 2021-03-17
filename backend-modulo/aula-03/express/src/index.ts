import express, { Request, Response, response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando no endereço http://localhost:3003");
});

// 1) EXERCICIO 01

app.get('/countries/all', (req: Request, res: Response) => {

    res.status(201).send(countries);

});

// 2) EXERCICIO 02

// /:id significa que vamos passar um path param cuja chave é id
app.get('/countries/:id', (req: Request, res: Response) => {

    //req.params é onde ficam os valores passados no path (o caminho da URL)
    const id: number = Number(req.params.id);

    /*iterando pelo array de países, até encontrar um que tenha id
    === ao que foi passado na url. Aqui a tipagem se mostra importante, porque o id
    de um país sempre é um número. */
    const country = countries.find((ct) => {
        return ct.id === id;
    });

    //envio o país encontrado
    res.status(200).send(country);

});

// 3) EXERCICIO 03


app.get('/countries/search', (req: Request, res: Response) => {

    const country: string = req.query.country as string;
    const myCountries = countries;
    const filteredCountries = myCountries.filter((ct) => {
        return ct.name.includes(country);
    });

    if (filteredCountries.length) {
        res.status(201).send(filteredCountries);
    } else {
        res.status(404).send("Not Found");
    }

});


