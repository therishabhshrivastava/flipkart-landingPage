import React from 'react';
import styles from './loginDropDown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faGift, faBoxOpen, faHeart, faTicket } from '@fortawesome/free-solid-svg-icons';

export const LoginDropDown = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li> <FontAwesomeIcon icon={faUser} /> My Profile</li>
        <li> <FontAwesomeIcon icon={faUserPlus} /> Flipkart Plus Zone</li>
        <li> <FontAwesomeIcon icon={faBoxOpen} /> Orders</li>
        <li> <FontAwesomeIcon icon={faHeart} /> Wishlist</li>
        <li> <FontAwesomeIcon icon={faGift} /> Rewards</li>
        <li> <FontAwesomeIcon icon={faTicket} /> Gift Cards</li>
      </ul>
    </div>
  )
}