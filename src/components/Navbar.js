import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { profile } from '@/data/portfolio'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const goToSection = (targetId) => {
    if (router.pathname !== '/') {
      router.push(`/#${targetId}`)
      return
    }

    const element = document.getElementById(targetId)
    if (!element) return

    const navbar = document.querySelector(`.${styles.navbar}`)
    const navbarHeight = navbar ? navbar.offsetHeight : 80
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const handleNavClickWithClose = (e, targetId) => {
    e.preventDefault()
    goToSection(targetId)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (router.pathname !== '/' || !router.asPath.includes('#')) return
    const id = router.asPath.split('#')[1]
    if (!id) return
    const timer = setTimeout(() => goToSection(id), 100)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, router.pathname])

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <button
            type="button"
            className={styles.logo}
            onClick={(e) => handleNavClickWithClose(e, 'home')}
            aria-label="Go to home"
          >
            LP
          </button>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/#home" onClick={(e) => handleNavClickWithClose(e, 'home')} className={styles.navLink}>
            Home
          </Link>
          <Link href="/#about" onClick={(e) => handleNavClickWithClose(e, 'about')} className={styles.navLink}>
            About
          </Link>
          <Link href="/#projects" onClick={(e) => handleNavClickWithClose(e, 'projects')} className={styles.navLink}>
            Projects
          </Link>
          <Link href="/#technologies" onClick={(e) => handleNavClickWithClose(e, 'technologies')} className={styles.navLink}>
            Technologies
          </Link>
          <Link href="/#contact" onClick={(e) => handleNavClickWithClose(e, 'contact')} className={styles.navLink}>
            Contact
          </Link>
        </div>

        <div className={`${styles.navRight} ${mobileMenuOpen ? styles.navRightOpen : ''}`}>
          <div className={styles.socialIcons}>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <Image src="/images/svgs/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href={`mailto:${profile.email}`} className={styles.icon}>
              <Image src="/images/svgs/gmail.svg" alt="Gmail" width={24} height={24} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <Image src="/images/svgs/logo-github.svg" alt="GitHub" width={24} height={24} />
            </a>
            {mounted && (
              <button onClick={toggleTheme} className={styles.themeToggle} type="button">
                {theme === 'light' ? (
                  <Image
                    src="/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg"
                    alt="Dark mode"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"
                    alt="Light mode"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
