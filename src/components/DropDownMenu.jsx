import React from 'react';
import styles from './dropDown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHeadset, faArrowTrendUp, faDownload } from '@fortawesome/free-solid-svg-icons';

export const DropDownMenu = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li> <FontAwesomeIcon icon={faBell} /> Notification Prefrence</li>
        <li> <FontAwesomeIcon icon={faHeadset} /> 24x7 Customer Care</li>
        <li> <FontAwesomeIcon icon={faArrowTrendUp} /> Advertise</li>
        <li> <FontAwesomeIcon icon={faDownload} /> Download App</li>
      </ul>
    </div>
  )
}