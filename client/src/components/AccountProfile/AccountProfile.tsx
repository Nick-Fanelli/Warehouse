import { getAuthUser } from '../../firebase';
import './AccountProfile.css'

const AccountProfile = () => {

    const user = getAuthUser();

    return (
        <div id="acc-profile">
            {
                user ?
                <img id="acc-profile" src={user.googleUser.photoURL!}></img>
                :
                <div className="skeleton"></div>
            }
        </div>
    )

}

export default AccountProfile;