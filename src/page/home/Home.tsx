import { IoMenu } from "react-icons/io5";
import scss from "./Home.module.scss";

const page = () => {
  return (
    <div className={scss.home}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.menu}>
            <IoMenu fontSize={40} />
          </div>
          <div className={scss.section}>
            <h1>
              <span>Holdy</span> - храни самые ценные моменты
            </h1>
            <p>
              Создавай персональные цифровые боксы с фото, музыкой и текстами.
              Делись ими с близкими через уникальный QR-код.
            </p>
            <button>Зарегистрироватся</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
