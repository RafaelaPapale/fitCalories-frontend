import { useState, createContext } from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUsuario, setOpenModalUsuario] = useState(false);

  return (
    <Context.Provider
      value={{
        openModalCreate,
        setOpenModalCreate,
        openModalUsuario,
        setOpenModalUsuario,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
