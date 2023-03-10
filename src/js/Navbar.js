import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src="./img/ic_brand.svg" alt="brand logo" />
      <ul className="nav-list m16 n">
        <li><a href="#">Company</a></li>
        <li><a href="#">Layanan</a></li>
        <li><a href="#">Studi Kasus</a></li>
        <li><a href="#">Data Center</a></li>
      </ul>
      <a href="#" className='contact-us b16 q'>Hubungi Kami</a>
    </nav>
  )
}

export default Navbar