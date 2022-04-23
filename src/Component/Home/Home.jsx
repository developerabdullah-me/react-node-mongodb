import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const[ users,setUsers] =useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/user')
       .then(res=>res.json())
       .then(data=>setUsers(data))
   },[]);
   const handelDelete=id=>{
       const proceed=window.confirm('Are you sure you want to delete')
       if (proceed){
         console.log('delete user',id);
           const url=`http://localhost:5000/user/${id}`
           fetch(url,{
               method:'DELETE'})
               .then(res=>res.json())
               .then(data=>{
                   if(data.deleteCount >0 ){
                       console.log('delete');
                       const remaining=users.filter(user=>user._id !==id)
                       setUsers(remaining)
                   }
               })
                   
              
     }
   }
    return (
        <div>
    
       
        <ul>
            {
               users.map(user => <li key={user._id}> 
                   {user.email}::
                   {user.name}
                   <Link to={`/update/${user._id}`}>update user</Link>
                   <button onClick={()=>handelDelete(user._id)}>X</button>
               </li>)
            }
        </ul>
        </div>
    );
};

export default Home;