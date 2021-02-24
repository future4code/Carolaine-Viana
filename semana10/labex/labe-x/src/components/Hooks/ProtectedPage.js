// import React, {useEffect} from 'react';
// import {useHistory} from 'react-router-dom'

// export const ProtectedPage = () =>{
//     const history = useHistory()

//     useEffect = () =>{
//         const token = localStorage.getItem('token')
    
//     if(token === null){
//         history.push('/login')
//         }
//     },[history]

//     return(
//         <div>
//             <p>Essa página só deve ser acessada por usuários logados.</p>
//         </div>
//     )

// }