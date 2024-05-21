import { openSans, sairaCondensed } from "@/app/fonts";
import Image from "next/image";
import styles from "./article.module.css";

const mainStyles = "block py-10 w-[90%] mx-auto gap-y-10 md:gap-y-20 md:mt-10 md:flex md:flex-col";
const titleStyles = `${sairaCondensed.className} ${styles.titleStyles}`;
const textStyles = `${openSans.className} ${styles.textStyles}`;

export const Content = () => {
  return (
    <main className={mainStyles}>
      <article className={styles.articleStyles}>
        <figure className={styles.figureStyles}>
          <Image
            src="/images/making-abs.jpg"
            className={styles.imageStyles}
            alt="Making Abs"
            width={640}
            height={425}
          />
        </figure>
        <main className={styles.contentStyles}>
          <h2 className={titleStyles}>Make your<br />workout fitness</h2>
          <p className={textStyles}>Schedule a session with our expert instructors and design a personalized workout routine tailored to your goals.</p>
          <p className={textStyles}>Whether you&apos;re aiming to build muscle, lose weight, or improve overall fitness, our team is here to support you every step of the way.</p>
          <p className={textStyles}>Create a plan that fits your lifestyle and helps you achieve the results you desire.</p>
          <p className={textStyles}>Join us today and start your journey to a healthier, stronger you!</p>
        </main>
      </article>

      <article className={`${styles.articleStyles} md:flex-row-reverse`}>
        <figure className={styles.figureStyles}>
          <Image
            src="/images/pulling-weight.jpg"
            className={styles.imageStyles}
            alt="Pulling Weight"
            width={1280}
            height={853}
          />
        </figure>
        <main className={styles.contentStyles}>
          <h2 className={titleStyles}>The Art of<br />Equipment</h2>
          <p className={textStyles}>Our gym is outfitted with top-of-the-line equipment, including an extensive range of dumbbells, barbells, and resistance machines.</p>
          <p className={textStyles}>Whether you&apos;re aiming to build muscle, improve endurance, or increase flexibility, our high-quality equipment ensures you have everything you need to push your limits and achieve your desired results.</p>
          <p className={textStyles}>At Peak Performance, we understand the importance of a comprehensive fitness journey.</p>
        </main>
      </article>

      <article className={styles.articleStyles}>
        <figure className={styles.figureStyles}>
          <Image
            src="/images/trx-workout.jpg"
            className={styles.imageStyles}
            alt="Trainer helping with TRX workout"
            width={1280}
            height={853}
          />
        </figure>
        <main className={styles.contentStyles}>
          <h2 className={titleStyles}>Expert Staff<br />and Personal<br />Trainers</h2>
          <p className={textStyles}>Our team of certified personal trainers and fitness experts are here to support and guide you every step of the way.</p>
          <p className={textStyles}>From creating personalized workout plans to providing nutritional advice, our staff is dedicated to helping you achieve your fitness goals in a safe and effective manner.</p>
          <p className={textStyles}>Our gym fosters a welcoming and motivating atmosphere where you can connect, share experiences, and support each other on your fitness journeys.</p>
        </main>
      </article>
    </main>
  );

};
