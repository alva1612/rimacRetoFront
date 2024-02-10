import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CallToAction } from "@/components/CallToAction";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <CallToAction className={styles.home__callToAction} />
      <Image
        className={styles.home__frontImg}
        src="/Home/front_img.png"
        width={136}
        height={160}
        sizes="(min-width: 768px) 480px, 136px"
        alt="front_img"
      />
      <Separator className={styles.home__separator} />
      <p className={styles.home__subtitle}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>
    </main>
  );
}
