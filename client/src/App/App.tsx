import { PairedUser, getAuthUser } from '../firebase';

import NavBar from "./Components/NavBar/NavBar";
import SideBar from './Components/SideBar/SideBar';

type Props = {

    user: PairedUser

}

const App = ({ user }: Props) => {

    return (

        <>
            <NavBar />
            <SideBar />
        </>

    )

}

export default App;