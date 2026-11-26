import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import {
  profile,
  experiences,
  education,
  certifications,
  projects,
  technologies,
} from '@/data/portfolio'
import aboutStyles from '@/styles/About.module.css'
import projectsStyles from '@/styles/Projects.module.css'
import technologiesStyles from '@/styles/Technologies.module.css'
import contactStyles from '@/styles/Contact.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={profile.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${profile.name} — ${profile.title}`} />
        <meta property="og:description" content={profile.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={profile.photo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} — ${profile.title}`} />
        <meta name="twitter:description" content={profile.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className={aboutStyles.about}>
        <div className={aboutStyles.container}>
          <h1 className={aboutStyles.heading}>Passion Fuels Purpose!</h1>

          <div className={aboutStyles.introSection}>
            <div className={aboutStyles.introText}>
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={aboutStyles.introParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={aboutStyles.profileImageWrapper}>
              <Image
                src={profile.photo}
                alt={profile.name}
                width={400}
                height={400}
                className={aboutStyles.profileImage}
                priority
              />
            </div>
          </div>

          <section className={aboutStyles.section}>
            <h2 className={aboutStyles.sectionTitle}>Experience</h2>
            <div className={aboutStyles.timeline}>
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className={aboutStyles.timelineItem}>
                  <div className={aboutStyles.timelineContent}>
                    <h3 className={aboutStyles.jobTitle}>
                      {exp.title} @{exp.company}
                    </h3>
                    <p className={aboutStyles.jobPeriod}>
                      {exp.period} | {exp.location}
                    </p>
                    <p className={aboutStyles.jobDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={aboutStyles.section}>
            <h2 className={aboutStyles.sectionTitle}>Education</h2>
            <div className={aboutStyles.timeline}>
              {education.map((edu) => (
                <div key={edu.degree} className={aboutStyles.timelineItem}>
                  <div className={aboutStyles.timelineContent}>
                    <h3 className={aboutStyles.jobTitle}>{edu.degree}</h3>
                    <p className={aboutStyles.jobPeriod}>
                      {edu.period} | {edu.school}
                    </p>
                    <p className={aboutStyles.jobDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={aboutStyles.section}>
            <h2 className={aboutStyles.sectionTitle}>Certifications</h2>
            <div className={aboutStyles.certGrid}>
              {certifications.map((cert) => (
                <div key={cert.title} className={aboutStyles.certCard}>
                  <h3 className={aboutStyles.certTitle}>{cert.title}</h3>
                  <p className={aboutStyles.certIssuer}>{cert.issuer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="projects" className={projectsStyles.projects}>
        <div className={projectsStyles.container}>
          <h1 className={projectsStyles.heading}>Imagination Trumps Knowledge!</h1>

          <div className={projectsStyles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={projectsStyles.projectCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className={projectsStyles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={projectsStyles.projectImage}
                  />
                </div>
                <div className={projectsStyles.projectInfo}>
                  <h3 className={projectsStyles.projectTitle}>{project.title}</h3>
                  <p className={projectsStyles.projectDescription}>{project.description}</p>
                  {project.impact && (
                    <p className={projectsStyles.projectImpact}>{project.impact}</p>
                  )}
                  <div className={projectsStyles.techRow}>
                    {project.tech.map((tag) => (
                      <span key={tag} className={projectsStyles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectsStyles.projectLink}
                    >
                      View Project
                      <Image
                        src="/images/svgs/external-link.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className={technologiesStyles.technologies}>
        <div className={technologiesStyles.container}>
          <h1 className={technologiesStyles.heading}>Technologies I Know</h1>
          <p className={technologiesStyles.subheading}>
            Backend, AI/ML, and cloud tools I use to ship production systems
          </p>

          {technologies.map((category) => (
            <div key={category.category} className={technologiesStyles.categorySection}>
              <h2 className={technologiesStyles.categoryTitle}>{category.category}</h2>
              <div className={technologiesStyles.technologiesGrid}>
                {category.techs.map((tech) => (
                  <div key={tech.name} className={technologiesStyles.techBadge}>
                    <span className={technologiesStyles.techIcon}>{tech.icon}</span>
                    <span className={technologiesStyles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={contactStyles.contact}>
        <div className={contactStyles.container}>
          <h2 className={contactStyles.heading}>Let&apos;s build something</h2>
          <p className={contactStyles.subheading}>
            Open to AI/backend roles and collaborations. Reach out by email or phone — I usually
            respond within a day.
          </p>
          <div className={contactStyles.actions}>
            <a href={`mailto:${profile.email}`} className={contactStyles.primaryBtn}>
              Email Me
            </a>
            <a href={`tel:${profile.phone}`} className={contactStyles.secondaryBtn}>
              Call {profile.phoneDisplay}
            </a>
            <a
              href={profile.resumeAi}
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyles.secondaryBtn}
            >
              Download AI Resume
            </a>
          </div>
          <div className={contactStyles.details}>
            <div className={contactStyles.detailCard}>
              <span className={contactStyles.detailLabel}>Email</span>
              <a href={`mailto:${profile.email}`} className={contactStyles.detailValue}>
                {profile.email}
              </a>
            </div>
            <div className={contactStyles.detailCard}>
              <span className={contactStyles.detailLabel}>Location</span>
              <span className={contactStyles.detailValue}>{profile.location}</span>
            </div>
            <div className={contactStyles.detailCard}>
              <span className={contactStyles.detailLabel}>Social</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={contactStyles.detailValue}
              >
                LinkedIn / GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
