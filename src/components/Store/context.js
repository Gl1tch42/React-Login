import { createContext } from 'react';

const StoreContext = createContext({
    token: null,
    setTroken: () => {},
});

export default StoreContext;