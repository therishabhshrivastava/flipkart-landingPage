import React from 'react'
import styles from './fashionDropDownMenu.module.css'


export const FashionDropDownMenu = () => {
    
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li> Men Topwaer</li>
        <li> Men Footwaer</li>
        <li> Women Ethnic</li>
        <li> Women Topwear</li>
        <li> Women Footwaer</li>
        <li> Kids</li>
        <li> Men Bottomwaer</li>
        <li> Men Accessories</li>
        <li> watches</li>
        <li>Kids</li>
        <li>Essentials</li>
        <li> Winter</li>
      </ul>
    </div>
    
    
  )
}