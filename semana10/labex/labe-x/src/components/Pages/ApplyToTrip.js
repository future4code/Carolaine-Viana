import React, {useState, useEffect } from 'react';
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom';
import useForm from '../Hooks/useForm';
import {url} from '../Bases/Url';
import Button from '@material-ui/core/Button';
import {Card} from '../Styled/Styled'


export default function ApplyToTrip () {

    const history = useHistory()
    const [form, onChange, clear] = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})
    const pathParams = useParams()
    const [countries, setCountries] = useState([])

    const requestCountry = () =>{
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) =>{
            setCountries(response.data)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const requestTrip = () =>{
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${url}/trips/${pathParams}/apply`, body)
        .then((respondeu)=>{
            console.log('inscricacao realizada com sucesso')
            console.log(respondeu.data)

        }).catch((error)=>{
            console.log('deu erro ao se inscrever')
        })
    }


    const clickSubmition = (event) =>{
        event.preventDefault();
    }

    useEffect(()=>{
        requestTrip()
        requestCountry()
        console.log(pathParams)
    }, [])

return(
    <Card>
        <h1>Se inscrever para uma viagem</h1>
        <form onSubmit={clickSubmition}>
        <input
        type="text"
        name="name"
        value={form.name}
        onChange={onChange}
        pattern="[A-Za-z]{3,}"
        title="no minimo 3 letras"
        required
        placeholder="seu nome"
        /><br/>

        <input
            type="number"
            name= "age"
            value={form.age}
            onChange={onChange}
            min="18"
            required
            placeholder="sua idade"
        /><br/>

        <input
            type="text"
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            pattern="[.\s\w]{30,}"
            minLength="30"
            title="minimo 30 caracteres"
            required
            placeholder="porque voce deve ir"
        /><br/>

        <input
            type="text"
            name="profession"
            value={form.profession}
            onChange={onChange}
            pattern="[.\s\w]{10,}"
            title="no minimo 10 carecteres"
            required
            placeholder="sua profissao"
        /><br/>

        {/* <input
            type="text"
            name="country"
            value={form.country}
            onChange={onChange}
            placeholder="seu pais"
            required
        /> */}

            <select name="country" value={form.country} onChange={onChange} placeholder="seu pais" required>
                <option value="">Pais</option>
                {countries.map((p)=>{
                    return(
                        <option id={p.name} value={p.name}>{p.name}</option>
                    )
                })}
            </select><br/><br/>

            <Button variant="contained" color="primary">Inscreva-se</Button><br/><br/>
        </form>
    </Card>

)





}