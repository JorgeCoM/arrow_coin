import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        La mejor manera <br className="sm:block hidden" /> de usar tu tarjeta
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Soluciones confiables, rapidas y cómodas adaptadas ati
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={'https://liberatusfinanzas.com.mx/wp-content/uploads/2023/07/LogoLF.png'} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
