import { useState, createContext } from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUsuario, setOpenModalUsuario] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listFood, setListFood] = useState([]);

  function storageUser(data) {
    localStorage.setItem('SistemUser', JSON.stringify(data));
  }

  async function signOut() {
    localStorage.removeItem('SistemUser');
    setUser(null);
  }

  return (
    <Context.Provider
      value={{
        openModalCreate,
        setOpenModalCreate,
        openModalUsuario,
        setOpenModalUsuario,
        user,
        loading,
        signOut,
        loadingAuth,
        setLoadingAuth,
        setUser,
        setLoading,
        storageUser,
        listFood,
        setListFood,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
