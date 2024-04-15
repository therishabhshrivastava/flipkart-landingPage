import React, { useState } from 'react'
import img1 from '../assets/grocery.png'
import img2 from '../assets/mobile.png'
import img3 from '../assets/fashion.png'
import img4 from '../assets/electronics.png'
import img5 from '../assets/home&furniture.jpg'
import img6 from '../assets/Appliance.jpg'
import img7 from '../assets/Travel.png'
import img8 from '../assets/toy.png'
import img9 from '../assets/twowheeler.png'
import styles from './category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FashionDropDownMenu } from './FashionDropDownMenu'
import { ElectronicDropDownMenu } from './ElectronicDropDownMenu'
import { FurnitureDropMenu } from './FurnitureDropMenu'
import { ToysMenu } from './ToysMenu'
import { TwoWheelerMenu } from './TwoWheelerMenu'

export const Category = () => {
  const [fashiondropDown, setFashionDropDown] = useState(false);
  const [electronicndropDown, setElectronicDropDown] = useState(false);
  const [furniturendropDown, setFurnitureDropDown] = useState(false);
  const [toysMenu, setToysMenu] = useState(false);
  const [twoWheeler, setTwoWheeler] = useState(false);


  return (
    <div className={styles.header2}>
      <div>
          <img src={img1} alt="" />
          <h1>Grocery</h1>
      </div>
      <div>
      <img src={img2} alt="" />
          <h1>Mobiles</h1>
      </div>
      <div onMouseEnter={() => setFashionDropDown(true)} onMouseLeave={() => setFashionDropDown(false)}>
          {
            fashiondropDown && < FashionDropDownMenu/>
          }
          <img src={img3} alt="" />
          <h1>Fashion</h1>
          <FontAwesomeIcon icon={faChevronDown} />
         
      </div>
      <div onMouseEnter={() => setElectronicDropDown(true)} onMouseLeave={() => setElectronicDropDown(false)}>
          {
            electronicndropDown && < ElectronicDropDownMenu/>
          }
          <img src={img4} alt="" />
          <h1>Electronics</h1> 
          <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div onMouseEnter={() => setFurnitureDropDown(true)} onMouseLeave={() => setFurnitureDropDown(false)}> 
          {
            furniturendropDown && < FurnitureDropMenu/>
          }
          <img src={img5} alt="" />
          <h1>Home & Furniture</h1>
          <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div>
          <img src={img6} alt="" />
          <h1>Appliances</h1>
      </div>
      <div>
          <img src={img7} alt="" />
          <h1>Travel</h1>
      </div>
      <div onMouseEnter={() => setToysMenu(true)} onMouseLeave={() => setToysMenu(false)}>
          {
            toysMenu && < ToysMenu/>
          }
          <img src={img8} alt="" />
          <h1>Beauty, Toys</h1>
          <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div onMouseEnter={() => setTwoWheeler(true)} onMouseLeave={() => setTwoWheeler(false)}>
          {
            twoWheeler && < TwoWheelerMenu/>
          }
          <img src={img9} alt="" />
          <h1>Two Wheelers</h1>
          <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  )
}

