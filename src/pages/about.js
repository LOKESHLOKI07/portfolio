import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  profile,
  experiences,
  education,
  certifications,
} from '@/data/portfolio'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>{`About — ${profile.name}`}</title>
        <meta name="description" content={`About ${profile.name} — ${profile.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Passion Fuels Purpose!</h1>

          <div className={styles.introSection}>
            <div className={styles.introText}>
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.introParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.profileImageWrapper}>
              <Image
                src={profile.photo}
                alt={profile.name}
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.timeline}>
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.jobTitle}>
                      {exp.title} @{exp.company}
                    </h3>
                    <p className={styles.jobPeriod}>
                      {exp.period} | {exp.location}
                    </p>
                    <p className={styles.jobDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.timeline}>
              {education.map((edu) => (
                <div key={edu.degree} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.jobTitle}>{edu.degree}</h3>
                    <p className={styles.jobPeriod}>
                      {edu.period} | {edu.school}
                    </p>
                    <p className={styles.jobDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div className={styles.certGrid}>
              {certifications.map((cert) => (
                <div key={cert.title} className={styles.certCard}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
