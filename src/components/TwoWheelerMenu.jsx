import React from 'react'
import styles from './twoWheelerMenu.module.css'


export const TwoWheelerMenu = () => {
    
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li> Furniture Studio</li>
        <li> Living Room</li>
        <li> Bedroom</li>
        <li> Kitchen</li>
        <li> Home Decor</li>
        <li> Space Saving Furniture</li>
        <li> Tools and Utility</li>
        <li> Kids Furniture</li>
        <li> Cleaning & Bath</li>
        <li> Electricals</li>
        <li> Pets</li>
        <li> Bedsheets</li>
      </ul>
    </div>
    
    
  )
}