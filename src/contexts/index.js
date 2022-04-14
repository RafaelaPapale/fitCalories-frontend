import { useState, createContext } from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <Context.Provider
      value={{
        openModalCreate,
        setOpenModalCreate,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
