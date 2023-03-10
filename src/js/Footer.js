import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-heading">
          <h3 className="b32 q">
            TLab Amazing <br /> Delivering Innovation
          </h3>
          <div className="social-media">
            <img src="./img/ic_facebook.svg" alt="facebook" />
            <img src="./img/ic_instagram.svg" alt="instagram" />
            <img src="./img/ic_youtube.svg" alt="youtube" />
          </div>
          <p className="m11 n">2010 - 2021 © TLab. All rights reserved.</p>
        </div>
        <div className="footer-navigation">
          <div className="company b14 q">
            <p>Company</p>
            <ul className="m16 n">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Logo</a>
              </li>
              <li>
                <a href="#">Brand Identity</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Studi Kasus</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="layanan b14 q">
            <p>Layanan</p>
            <ul className="m16 n">
              <li>
                <a href="#">IT Managed Service</a>
              </li>
              <li>
                <a href="#">IT Consultant</a>
              </li>
              <li>
                <a href="#">IT Training</a>
              </li>
              <li>
                <a href="#">Big Data</a>
              </li>
              <li>
                <a href="#">Artificial Inteligence</a>
              </li>
              <li>
                <a href="#">Cloud Computing</a>
              </li>
              <li>
                <a href="#">Internet of Things</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">System Integration</a>
              </li>
              <li>
                <a href="#">System Information</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kontak b14 q">Kontak</p>
            <h5 className="b16 q">
              PT. Teknologi Kode Indonesia <br /> contact@tlab.co.id{" "}
            </h5>
            <div className="m16 n">
              <p className="address">
                Head Office <br /> Jl Tanjung No.126, Sorosutan, Umbulharjo, <br />{" "}
                Yogyakarta - 55162
              </p>
              <p className="phone">
                <img src="./img/ic_phone.svg" alt="" />
                (0274) - 2870394
              </p>
              <p className="address">
                Jakarta Office <br /> SOHO Pancoran Unit S-1210 <br /> Jl. Let. Jend. MT.
                Haryono Kav 2-3 Pancoran, <br /> Jakarta Selatan 12810
              </p>
              <p className="phone">
                <img src="./img/ic_phone.svg" alt="" />
                (0274) - 2870394
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle"></div>
    </footer>
  );
};

export default Footer;
