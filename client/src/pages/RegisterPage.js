import React from 'react';
import PublicMaster from './layout/public/publicMaster';
import RegisterForm from '../components/registerForm';


function homepage (props){

    return (
        <PublicMaster>
            <RegisterForm/>

        </PublicMaster>
        
    );
}

export default homepage;