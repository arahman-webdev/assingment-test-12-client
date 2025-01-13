import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {

    const {name} = useContext(AuthContext)

    return (
        <div>
            home{name}
        </div>
    );
};

export default Home;