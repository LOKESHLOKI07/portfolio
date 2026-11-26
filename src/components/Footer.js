import { profile } from '@/data/portfolio'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>LP</span>
          <div>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.title}>{profile.title}</p>
          </div>
        </div>
        <div className={styles.links}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.resumeAi} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {profile.name}. Based in {profile.location}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
