// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from 'react-router-dom';
// import {url} from '../Bases/Url'

// export default function Candidates(){
//     const[decide, setdecide] = useState(null)
//     const pathParams = useParams();
//     const token = localStorage.getItem("token")
//     const [tripDetail, setTripDetail] = useState({});

//     const aprove = (idCandidate, decision) => {
//         setdecide(decision)

//         const body = {
//             aprove: setdecide
//         }

//         axios.put(`${url}/trips/${pathParams.idTripDetail}/candidates/${idCandidate}/decide`, body,{
//             headers:{
//                 auth: token
//             }
//         }).then((respondeu)=>{
//             alert('pegou com sucesso')
//         }).catch(()=>{
//             alert('nao pegou ngm')
//         })
//     }

//     return(
//         <h1>Candidatos</h1>
//         {decide.map((p)=>{
//             return(

//             )
//         }}
//     )
// }