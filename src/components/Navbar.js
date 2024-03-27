
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ()=>{
    const arr = [
        {
            label : 'Home',
            to : '/'
        },
        {
            label : 'Quto',
            to : '/Quto'
        },
        {
            label : 'Restorend',
            to : '/Restorend'
        },
        {
            label : 'Foods',
            to : '/Foods'
        },{
            label : 'Contact',
            to : '/Contact'
        }
    ]
    
    return (
        <div id="navbar">
            <div className='left'>
                <div className='left-main'>
                <Link to={`/`}>
                <img src="https://flowbite.com/docs/images/logo.svg" id="log-img"></img>
                <span id="logo-name">GeekFoods</span>
                </Link>
                </div>
            </div>
            <div className='mid'>
                <ul id="list">
                  {
                    arr.map((item, key)=>{
                        return(
                           <li key={key} className='list'>
                            <Link to={item.to}>
                                {item.label}
                            </Link>
                           </li>
                        )
                    })
                  }
                </ul>
            </div>
            <div className='right'>
                <button id="btn">Get started</button>
            </div>
        </div>
    )
}

export default Navbar;