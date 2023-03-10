import "../css/Clients.css";
import CardClient from "./CardClient";

const Clients = () => {
  return (
    <section className="client">
      <img className="background" src="./img/img_bg_client.png" alt="" />
      <div className="client-wrapper">
        <div className="header-wrapper">
          <h2 className="b32 q">
            Connect <br /> & Collaborate
          </h2>
          <div className="client-description m18 n">
            <p className="m18 n">
              Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan
              produk terbaik
            </p>
            <a href="#" className="b16 q">
              Lihat Semua partner TLab
              <img src="./img/ic_diagonal_arrow_right_up.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-container">
          <CardClient
            className="card-client-item"
            cardImage="./img/img_client1.svg"
            name="Hamdan Hamedan"
            title="CEO of Kesan Indonesia"
            profileImage="./img/img_profile.png"
            content="Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better."
            background="#049CFB"
          />
          <CardClient
            className="card-client-item"
            cardImage="./img/img_client2.svg"
            name="Hamdan Hamedan"
            title="CEO of Kesan Indonesia"
            profileImage="./img/img_profile.png"
            content="Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan."
            background="#5449D6"
          />
          <CardClient
            className="card-client-item"
            cardImage="./img/img_client3.svg"
            name="Hamdan Hamedan"
            title="CEO of Kesan Indonesia"
            profileImage="./img/img_profile.png"
            content="Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin."
            background="#00DE9C"
          />
        </div>
        <div className="client-logos">
          <img src="./img/ic_logo_google.png" alt="" />
          <img src="./img/ic_logo_jayamotor.png" alt="" />
          <img src="./img/ic_logo_suhu.png" alt="" />
          <img src="./img/ic_logo_anterin.png" alt="" />
          <img src="./img/ic_logo_kesan.png" alt="" />
          <img src="./img/ic_logo_ipb.png" alt="" />
          <img src="./img/ic_logo_kehutanan.png" alt="" />
          <img src="./img/ic_logo_pemda.png" alt="" />
          <img src="./img/ic_logo_ugm.png" alt="" />
          <img src="./img/ic_logo_gojek.png" alt="" />
          <img src="./img/ic_logo_grab.png" alt="" />
          <img src="./img/ic_logo_uber.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
