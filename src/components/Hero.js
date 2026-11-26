import Image from 'next/image'
import { motion } from 'framer-motion'
import { profile } from '@/data/portfolio'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroLeft}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.profileImageContainer}>
            <Image
              src="/images/profile/developer-pic-1.png"
              alt={profile.name}
              width={500}
              height={500}
              className={styles.profileImage}
              priority
            />
            <div className={styles.circularTextContainer}>
              <Image
                src="/images/circular-text.png"
                alt="Software Developer"
                width={280}
                height={280}
                className={styles.circularText}
              />
              <a href={`mailto:${profile.email}`} className={styles.hireMeButton}>
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <p className={styles.brandName}>{profile.name}</p>
          <p className={styles.roleTitle}>{profile.title}</p>
          <h1 className={styles.mainHeading}>
            Building production AI systems with Python backends.
          </h1>
          <p className={styles.description}>{profile.summary}</p>
          <div className={styles.ctaButtons}>
            <a
              href={profile.resumeAi}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeButton}
            >
              AI Resume
              <Image src="/images/svgs/external-link.svg" alt="" width={20} height={20} />
            </a>
            <a
              href={profile.resumeFullStack}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeSecondary}
            >
              Full Stack Resume
            </a>
            <a href="#contact" className={styles.contactButton}>
              Contact
            </a>
          </div>
          <div className={styles.lightbulb}>
            <Image
              src="/images/svgs/miscellaneous_icons_1.svg"
              alt=""
              width={100}
              height={100}
              className={styles.lightbulbIcon}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
