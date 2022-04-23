import React from 'react';
import { useParams } from 'react-router-dom';

const UserUpdate = () => {
    const {id}=useParams()
    return (
        <div>
            <h1>update id{id}</h1>
        </div>
    );
};

export default UserUpdate;