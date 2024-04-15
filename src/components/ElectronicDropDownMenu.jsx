import React from 'react'
import styles from './electronicDropDownMenu.module.css'


export const ElectronicDropDownMenu = () => {
    
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li> Audio</li>
        <li> Camera</li>
        <li> Gaming</li>
        <li> Laptop</li>
        <li> Laptop Accessories</li>
        <li> Desktop</li>
        <li> Mobile Accessories</li>
        <li> PowerBanks</li>
        <li> Smart Wearables</li>
        <li>Tablest</li>
        <li>Smart Home Gadgets</li>
        <li> Storage</li>
      </ul>
    </div>
    
    
  )
}