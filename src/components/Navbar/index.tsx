import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <img src="" alt="" />
      </div>

      <nav>
        <ul className={styles.navList}>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Curriculum vitae</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  )
}