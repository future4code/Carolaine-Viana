// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { useHistory, useParams } from 'react-router-dom';
// import {Card} from '../Styled/Styled';


// export default function TripDetail() {
//     const history = useHistory();
//     const pathParams = useParams();
//     const [tripDetail, setTripDetail] = useState({});
//     const [decideCandidate, setDecideCandidate] = useState(null)

//     const token = localStorage.getItem("token");

//     const requestPut = (idCandidate, decision) =>{
//         setDecideCandidate(decision)

//         const body = {
//             aprove: decideCandidate
//         }

//         axios
//         .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana-epps/trips/${pathParams.idTripDetail}/candidates/${idCandidate}/decide`, body,
//         {
//             headers:{
//                 auth: token
//             }
//         })
//         .then((response) =>{
//             alert("Sucesso!")
//         })
//         .catch((error) =>{
//             alert(error.message)
//         })
//     };

//     const functionRequestGet = () =>{
//         axios
//             .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolaine-viana-epps/trip/${pathParams.idTripDetail}`,
//             {
//                 headers:{
//                     auth: token
//                 }
//             })
//             .then((response) =>{
//                 setTripDetail(response.data.trip)
//                 console.log(tripDetail)
//             })
//             .catch((error) =>{
//                 alert(error.message)
//             })
//     };

//     // useEffect(() =>{
//     //     if(!token || !pathParams.idTripDetail) {
//     //         // goToHomePage(history)
//     //         alert('deu zika')
//     //     }
//     //     else{
//     //        functionRequestGet() 
//     //     }
//     // }, []);


//     return(
//             <Card>
                    
//                     {/* <p>
//                         Planeta: {tripDetail.planet}<br/>
//                         Duração: {tripDetail.durationInDays} dias<br/>
//                         Data: {tripDetail.date}
//                     </p> */}
//                     {tripDetail.candidates.map((candidate) =>{
//                         return(
//                             <div>
//                                 <h4 key={candidate.name}>
//                                     {candidate.name}
//                                 </h4>
//                                 <p key={candidate.id}>
//                                     Idade: {candidate.age}<br/>
//                                     Profissão: {candidate.profession}<br/>
//                                     País: {candidate.country}<br/>
//                                     {candidate.applicationText}
//                                 </p>
//                                 <div>
//                                     {/* <ImgOk src={ok} onClick={()=>requestPut(candidate.id, true)}/> */}
//                                     {/* <ImgCancel src={cancel} onClick={()=>requestPut(candidate.id, false)}/> */}
//                                 </div>
//                             </div>
//                         );
//                     })}
//             </Card>  
//     );
// }