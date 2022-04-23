import React, {  useEffect, useState } from 'react';

const Home = () => {
    const[ users,setUsers] =useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/user')
       .then(res=>res.json())
       .then(data=>setUsers(data))
   },[])
   const handelDelet=id=>{
       const proceed=window.confirm('Are you sure you want to delete')
       if (proceed){
           console.log('delete user',id);
       }
   }
    return (
        <div>
    
       
        <ul>
            {
               users.map(user => <li key={user._id}> 
                   {user.email}::
                   {user.name}
                   <button onClick={()=>handelDelet(user._id)}>X</button>
               </li>)
            }
        </ul>
        </div>
    );
};

export default Home;