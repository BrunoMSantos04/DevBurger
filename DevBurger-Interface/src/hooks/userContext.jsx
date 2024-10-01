import {useContext, createContext, useState, useEffect} from 'react'

const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})

    return (
        <UserContext.Provider value={{userInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be a valid context');
    }

    return context;
}