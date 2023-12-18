import './SideBar.css'

import { faGear, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {

    return (
        <section id="side-bar">
            <div className="header">
                <div className="logo"></div>
                <h1>Warehouse</h1>
            </div>

            <div className="ou">
                <div>
                    <FontAwesomeIcon icon={faSitemap} className='fa-icon' />
                    <h1>Active Organizational Unit</h1>
                </div>
                <FontAwesomeIcon icon={faGear} className='fa-icon' />
            </div>
        </section>
    )

}

export default SideBar;