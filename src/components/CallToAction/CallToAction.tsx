import { ClassNameProp } from "@/types/props.common";
import { FC, PropsWithChildren } from "react";
import styles from "./callToAction.module.scss";

export const CallToAction: FC<PropsWithChildren<ClassNameProp>> = () => {
  return (
    <div className={styles.callToAction}>
      <div className={styles.callToAction__chip}>
        <p className={styles.callToAction__chipText}>Seguro Salud Flexible</p>
      </div>
      <div className={styles.callToAction__titleCont}>
        <h1 className={styles.callToAction__title}>
          Creado para ti y tu familia
        </h1>
      </div>
    </div>
  );
};
