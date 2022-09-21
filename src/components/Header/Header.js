import { useState } from 'react';
import { Twirl as Hamburger} from 'hamburger-react';
import './Header.scss';

function Header({onLogout}) {

    const [isOpen, setOpen] = useState(false)

  return (
    <div className="cover">
        <div className="navbar">
            <div>
            <Hamburger color="black" toggled={isOpen} 
            size="40" rounded toggle={setOpen}/>
            </div>
            <div className="title-container">
            <h2 className="title-header"> FitLife</h2>
            </div>
            <button onClick={() => onLogout()}>Logout</button>
        </div>
    </div>
  )
}

export default Header