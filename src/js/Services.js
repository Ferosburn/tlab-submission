import "../css/Services.css";
import CardService from "./CardService";

const Services = () => {
  return (
    <section className="services">
      <div className="container-left">
        <h2 className="b32 q">
          Rangkaian Proyek
          <br />
          Menarik TLab
        </h2>
        <p className="m18 n">
          Integritas dan kreativitas menjadi kunci dalam membangun produk
          digital <br /> terbaik untuk bisnis Anda
        </p>
        <a className="b16 q" href="#">
          Lihat Semua Layanan TLab{" "}
          <img src="./img/ic_diagonal_arrow_right_up.svg" alt="" />
        </a>
        <CardService
          image="./img/img_service1.jpg"
          title="kesan.id - Kedaulatan Santri dan Kepribadian Muslim"
          category="IT Managed Service"
        />
      </div>
      <div className="container-right">
        <CardService
          image="./img/img_service2.jpg"
          title="Anterin.id Ridesharing company"
          category="Appliaction Development"
        />
        <CardService
          image="./img/img_service3.jpg"
          title="Juru.id Smart Parking"
          category="Artificial intelligence"
        />
      </div>
    </section>
  );
};

export default Services;
