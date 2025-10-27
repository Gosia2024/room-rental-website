import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/foto_1.png";

export default function Hotel() {
  return (
    <div className={`${styles.hotel} row`}>
      {/* LEFT COLUMN: IMAGE */}
      <div className="col-4">
        <img
          src={hotelImg}
          alt="pensjonat"
          className="img-fluid img-thumbnail"
        />
      </div>

      {/* RIGHT COLUMN: TEXT CONTENT */}
      <div className="col-8">
        {/* first row: Pensjonat + Ocena */}
        <div className="row align-items-start">
          <div className="col-6">
            <p><b>Pensjonat</b></p>
          </div>
          <div className="col-6 text-end">
            <p><b>Ocena: 8.5</b></p>
          </div>
        </div>

        {/* second row: Warszawa + 233 */}
        <div className="row align-items-start mb-2">
          <div className="col-6">
            <span className="badge text-bg-light">Warszawa</span>
          </div>
          <div className="col-6 text-end">
            <span className="badge text-bg-secondary">233</span>
          </div>
        </div>

        {/* description */}
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          porro illum veritatis molestiae nemo tenetur veniam, soluta impedit
          placeat fuga saepe ex beatae alias maxime nobis explicabo praesentium
          voluptates. Dignissimos.
        </p>

        {/* button aligned right */}
        <div className="text-end">
          <button className="btn btn-primary">Pokaż</button>
        </div>
      </div>
    </div>
  );
}
