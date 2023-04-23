import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { generatePassword } from "../actions/generalAction";

const Task1 = () => {
    const dispatch = useDispatch()
    
    const [password, setPassword] = useState('');

    const handleGeneratePassword = () => {

    };

    return (
        <div className='text-center py-5'>
            <h2 className='pb-4'>Password Generator & Checker</h2>
            <button className='btn btn-primary' onClick={()=>handleGeneratePassword()} >Generate Password</button>
        </div>
    );
};

export default Task1;