import React from 'react'
import './header-component-styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from  '../../assets/crown.svg'
import {auth} from '../../firebase/firebase-utils'
const Header = ({currentUser}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'></Logo>
            </Link>
            <div className='options' >
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/shop' className='option'>CONTACT</Link>
                {
                    currentUser?
                    <Link className="option" onClick={()=> auth.signOut()}>SIGN OUT</Link>
                    :
                    <Link className="option" to='/signin' >SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header