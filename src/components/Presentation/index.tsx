import styles from './presentation.module.css'

export default function Presentation() {
  return (
    <section className={styles.presentationSection}>
      <div className={styles.presentationIntro}>
        <h1>&lt;Olá, eu sou o Brenno!/&gt;</h1>
        <h2>&lt;Eu projeto e Desenvolvo WebSites/&gt;</h2>
        <p>
          Apaixonado por tecnologia e inovação, estou sempre em busca de novos
          desafios e oportunidades para crescer profissionalmente.
        </p>
      </div>

      <div className={styles.presentationRoles}>
        <div className={styles.roleCard}>
          <h3 className={styles.roleTitle}>Designer</h3>
          <p className={styles.roleDescription}>
            Designer de produtos especializado em design de interface de usuário e sistemas de design.
          </p>
        </div>

        <div className={styles.roleCard}>
          <h3 className={styles.roleTitle}>Codificador</h3>
          <p className={styles.roleDescription}>
            Desenvolvedor front-end que escreve código limpo, elegante e eficiente.
          </p>
        </div>
      </div>
    </section>
  )
}
