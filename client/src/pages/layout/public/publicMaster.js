import React from 'react';
import Nav from './NavbarSection';



function PublicMaster(props){


    return (
        <main {...props}>
            <Nav></Nav>

            {props.children}

            
        </main>
    );

}

export default PublicMaster;
