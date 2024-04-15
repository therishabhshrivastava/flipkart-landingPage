import React, { useState } from 'react';
import styles from './header.module.css'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropDownMenu } from './DropDownMenu'
import { LoginDropDown } from './LoginDropDown';
import { faMagnifyingGlass, faUser, faChevronDown, faCartShopping, faStore, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [moredropDown, setMoreDropDown] = useState(false);
  const [logindropDown, setLoginDropDown] = useState(false);
  

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img className={styles.logo} src={logo} alt="" />
      </div>

      <div className={styles.navSearch}>
        <div className={styles.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input placeholder="Search for Products, Brands and More" className={styles.searchInput} />
      </div>

      <div className={styles.navSignin} onMouseEnter={() => setLoginDropDown(true)} onMouseLeave={() => setLoginDropDown(false)}>
          
          <FontAwesomeIcon icon={faUser} />
          <p>Login</p>
          <FontAwesomeIcon icon={faChevronDown} className={styles.dropIcon}  />
          {
            logindropDown && < LoginDropDown/>
          }
      </div>

      <div class={styles.navCart}>
        <FontAwesomeIcon icon={faCartShopping} />
        Cart
      </div>

      
      <div className={styles.navSeller}>
        <FontAwesomeIcon icon={faStore} />
          <p>Become a Seller</p>
      </div>

      <div className={styles.moredropDown} onMouseEnter={() => setMoreDropDown(true)} onMouseLeave={() => setMoreDropDown(false)}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        {
          moredropDown && < DropDownMenu />
        }
        
      </div>

    </div>
    
  )
}

