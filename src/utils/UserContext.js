import { createContext } from "react";

const UserContext = createContext({
    loggedinUser : "default"
})

export default UserContext