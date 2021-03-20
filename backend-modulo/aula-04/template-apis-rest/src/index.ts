//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

// **************** EXERCICIO 01  **************** //
//procurar por tudo
app.get("/users/all", (req: Request, res: Response) => {
  const result = users.map((user) => ({
    id: user.id,
    name: user.name,
  }));
  res.status(200).send(result);
});

// **************** EXERCICIO 02  **************** //

//encontrar usuario por type
app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const type: string = req.query.type as string;

    const myUsers = users;

    const myUser: user | undefined = myUsers.find((u) => {
      return u.type === type;
    });

    if (!myUser) {
      errorCode = 404;
      throw new Error("type not found");
    }

    res.status(200).send({ myUser });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }

  //por query: http://localhost:3003/users/teste/?type=ADMIN
});

// **************** EXERCICIO 03  **************** //

app.get("/users/search/:name", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    //buscar por query parames
    //metodo get nao recebe body
    // const name: string = req.query.name as string
    const name: string = req.params.name;

    //usuarios que tenham esse nome
    //criando uma copia
    const myUsers = users;
    const myUser = myUsers.find((u) => {
      return u.name == name;
    });

    if (!myUser) {
      errorCode = 404;
      throw new Error("user not found");
    }

    res.status(200).send({ user: myUser });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// **************** EXERCICIO 04  **************** //

//adicionar usuario
//pode ser: put, post, ou patch(que pode ou nao funcionar)
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    //criando um objeto
    const reqdBody: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    //para nao trazer dados undefined
    if (
      !reqdBody.id ||
      !reqdBody.name ||
      !reqdBody.email ||
      !reqdBody.type ||
      !reqdBody.age
    ) {
      errorCode = 422;
      throw new Error("Please, check the fields.");
    }

    //como nao tem useState, usa o push para guardar em um array...
    users.push(reqdBody);
    res.status(201).send({ message: "user created sucessfully" }); //criado com sucesso. created.
  } catch (error) {
    res.status(errorCode).send({ message: error.messsage });
  }
});

// **************** EXERCICIO 05  **************** //


// **************** EXERCICIO 06  **************** //

// **************** EXERCICIO 07  **************** //

// app.delete('/users/delete/:id', (res: Response, req: Request) => {
//   const id = Number(req.params.id);
//   try {
//       const myUsers = users;

//       const userIndex = myUsers.findIndex((us) => {
//           return us.id === id;
//       })

//       users.splice(userIndex, 1);
//       res.status(200).send("USUÁRIO APAGADO COM SUCESSO");
//   } catch (error) {
//       res.status(400).send({ status: "FAILED", message: error.message });
//   }

// })

// **************** BUSCAR POR ID  **************** //

app.get("/users/byid/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      //se id nao for um numero
      errorCode = 422; //unprocesabled entity = passando um valor que nao da pra lidar (tipo diferente)
      throw new Error("invalid value for id. pls send a number");
    }

    const myUsers = users;
    const myUser = myUsers.find((u) => {
      return u.id === id;
    });

    if (!myUser) {
      errorCode = 404;
      throw new Error("id not found");
    }

    res.status(200).send(myUser);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
