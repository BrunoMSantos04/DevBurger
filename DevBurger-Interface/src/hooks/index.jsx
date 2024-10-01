import { UserProvider } from "./userContext"

const AppProvider = ({children}) => {

    return <UserProvider>
            {children}
        </UserProvider>
    
}

export default AppProvider