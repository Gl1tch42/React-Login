import React from 'react';
import Context from './context';
import useStorage from './../../utils/useStorage'

const StoreProvider = ({Children}) => {
    const [token, setTroken] = useStorage('token');

    return(
        <Context.Provider
        value={{
            token,
            setTroken,
        }}
        >
            {Children}
        </Context.Provider>
    )
}

export default StoreProvider;