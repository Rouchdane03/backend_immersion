import footerStyles from "./Footer.module.css"

const Footer = ()=>{
    return (
        <p className={footerStyles.ftr}>
            © 2025 | by <a href="https://rouch-portfolio.vercel.app/" target="_blank" style={{color:"yellow"}}>Rouchdane MOUDJIBOU</a>
        </p>
    )
}

export default Footer;