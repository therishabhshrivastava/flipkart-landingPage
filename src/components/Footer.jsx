import React from 'react'
import styles from './footer.module.css'


const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "https://www.flipkart.com/helpcentre",
      },
      {
        name: "About Us",
        redirect: "https://www.flipkart.com/about-us",
      },
      {
        name: "Careers",
        redirect: "https://www.flipkartcareers.com",
      },
      {
        name: "Flipkart Stories",
        redirect: "https://stories.flipkart.com",
      },
      {
        name: "Press",
        redirect: "https://stories.flipkart.com/category/top-stories/news",
      },
      {
        name: "Flipkart Wholesale",
        redirect: "https://www.flipkartwholesale.com",
      },
      {
        name: "Corporate Information",
        redirect: "https://www.flipkart.com/corporate-information",
      },
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.flipkart.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.flipkart.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.flipkart.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.flipkart.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.flipkart.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.flipkart.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.flipkart.com/sitemap",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/flipkart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/flipkart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/flipkart",
      }
    ]
  }
]
export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerLinks}>

      {footerLinks.map((el, i) => (
        <div className={styles.footerLinkDiv} key={i}>
          <h2 className={styles.footerLinkH2}>{el.title}</h2>
          {el.links.map((item, i) => (
            <a href={item.redirect} rel="noreferrer"  key={i}>{item.name}</a>
          ))}

        </div>
      ))}

    </div>

    <div className={styles.footerSec}></div>
    <div className={styles.footerSec1}>
      <div className={styles.footerSec2}>
        <h2 className={styles.footerSec3}>Mail Us:</h2>
        <p className={styles.footerSec4}>Flipkart Internet Private Limited,<br />
          Buildings Alyssa, Begonia &<br />
          Clove Embassy Tech Village,<br />
          Outer Ring Road, Devarabeesanahalli Village,<br />
          Bengaluru, 560103,<br />
          Karnataka, India
        </p>
      </div>

      <div className={styles.footerSec5}>
        <h2 className={styles.footerSec6}>Registered Office Address:</h2>
        <p className={styles.footerSec7}>Flipkart Internet Private Limited,<br />
          Buildings Alyssa, Begonia &<br />
          Clove Embassy Tech Village,<br />
          Outer Ring Road, Devarabeesanahalli Village,<br />
          Bengaluru, 560103,<br />
          Karnataka, India <br />
          CIN : U51109KA2012PTC066107<br />
          Telephone: <a className={styles.footerSec8} href="tel:18002029898">1800 202 9898</a>
        </p>
      </div>
    </div>

  </footer>
  )
}


