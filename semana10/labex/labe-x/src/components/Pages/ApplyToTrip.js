import React, {useState, useEffect } from 'react';
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom';
import useForm from '../Hooks/useForm';
import {url} from '../Bases/Url';
import Button from '@material-ui/core/Button';
import {Card, InputDesign} from '../Styled/Styled';



export default function ApplyToTrip () {

    const history = useHistory()
    const [form, onChange, clear] = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})
    const pathParams = useParams()
    const [countries, setCountries] = useState([])
    const [trips, setTrips] = useState([])
    const [idTrip, setIdTrip] = useState()

    const onChangeTrips = (e) => {
        setIdTrip(e.target.value)
      }

      useEffect(() => {
        getTrips()
        requestCountry()
      }, [])


      //pegar os paises
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


    //post para se inscrever
    const requestTrip = (event) => {
        event.preventDefault()
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana-epps/trips/${idTrip}/apply`, form)
          .then((res) => {
            alert('Inscrição realizada com sucesso')
            clear()
          })
          .catch((error) => {
            alert('Não foi possível criar inscrição')
          })
      }

      //get pegar as viagens

      const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana-epps/trips')
          .then((res) => {
            setTrips(res.data.trips)
            console.log(res.data)
          })
          .catch((error) => {
            alert('Não foi possível pegar as viagens.')
          })
      }

    
return(
    <Card>
        <h1>Se inscrever para uma viagem</h1>
        <form onSubmit={requestTrip}>
        <InputDesign
        type="text"
        name="name"
        value={form.name}
        onChange={onChange}
        pattern="[A-Za-z]{3,}"
        title="no minimo 3 letras"
        required
        placeholder="seu nome"
        /><br/>

        <InputDesign
            type="number"
            name= "age"
            value={form.age}
            onChange={onChange}
            min="18"
            required
            placeholder="sua idade"
        /><br/>

        <InputDesign
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

        <InputDesign
            type="text"
            name="profession"
            value={form.profession}
            onChange={onChange}
            pattern="[.\s\w]{10,}"
            title="no minimo 10 carecteres"
            required
            placeholder="sua profissao"
        /><br/>

            <select name="country" value={form.country} onChange={onChange} placeholder="seu pais" required>
                <option value="">Pais</option>
                {countries.map((p)=>{
                    return(
                        <option id={p.name} value={p.name}>{p.name}</option>
                    )
                })}
            </select>

            <select
              name='trips'
              onChange={onChangeTrips}
              value={idTrip}
              required
            >
              <option selected disabled>Viagens</option>
              {trips && <>{trips.map((trip) => {
                return (
                  <option value={trip.id}>{trip.name}</option>
                )
              })}</>}
            </select>

            <Button type="submit" variant="contained" color="primary">Inscreva-se</Button><br/><br/>
        </form>
    </Card>

)





}