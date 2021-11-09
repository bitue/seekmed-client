import React, { createContext } from 'react';
import useFireBase from '../hooks/useFirebase';


//create a context hook with export default ;

export const AuthContext = createContext()

const AuthProvider = (props) => {
    //get all data from useFirebase hook;
    //then create a AuthProvider with value jsx element return 
    const allContext = useFireBase()
    return (
        <AuthContext.Provider value ={allContext}>
            {props.children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;






//