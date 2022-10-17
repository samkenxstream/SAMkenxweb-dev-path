import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Member.module.scss';

export default function Member({
  image,
  altTag,
  name,
  title,
  position,
  about,
  linkedIn,
  portfolio,
  customClass,
}) {
  return (
    <div
      className={
        customClass ? `${styles.card} ${styles[customClass]}` : styles.card
      }
    >
      {image && (
        <div className={styles.card__image}>
          <Image
            src={image}
            alt={altTag}
            className={styles.img}
            layout='fill'
          />
        </div>
      )}

      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.position}>{position}</h3>
      <div className={`${styles.content}`}>
        {linkedIn && (
          <div className={`${styles.links}`}>
            <Image
              src='/images/svg/LinkedIn2.svg'
              alt='LinkedIn'
              height='25px'
              width='25px'
            />
            <Link href={`https://linkedin.com/in/${linkedIn}`}>{linkedIn}</Link>
          </div>
        )}
        {portfolio && (
          <div className={`${styles.links}`}>
            <Image
              src='/images/svg/globe.svg'
              alt='Web Site'
              height='25px'
              width='25px'
            />
            <Link href={`https://${portfolio}`}>{portfolio}</Link>
          </div>
        )}

        <p>{about}</p>
      </div>
    </div>
  );
}
