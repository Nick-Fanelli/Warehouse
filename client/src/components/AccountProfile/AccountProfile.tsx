import { getAuthUser } from '../../firebase';
import Skeleton from '../Skeleton/Skeleton';
import './AccountProfile.css'

const AccountProfile = () => {

    const user = getAuthUser();

    return (
        <div id="acc-profile">
            {
                user && user.googleUser.photoURL ?
                <img src={user?.googleUser.photoURL!}></img>
                :
                <div className='sk'>
                    <Skeleton fillSpace={true} />
                </div>
            }
        </div>
    )

}

export default AccountProfile;