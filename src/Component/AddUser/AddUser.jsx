import React from 'react';

const AddUser = () => {
    const handelSubmit=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const user={name,email}

        // post data 
        fetch('http://localhost:5000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(res=>res.json())
.then(data=>{
    console.log('sucsess data',data);
})
    }
    return (
        <div>
            <h2>
             please add a new user
            </h2>
            <form onSubmit={handelSubmit}>
                <input type="name" name='name'   required /> <br />
                <input type="email" name='email' required/><br />
                <input type="submit" value="Add User" />
            </form>
           
        </div>
    );
};

export default AddUser;