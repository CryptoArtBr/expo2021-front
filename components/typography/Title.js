import styles from './Title.module.css'

export const MainTitle = ({children, ...props}) => <h1 {...props} className={styles.main_title}>{children}</h1>

export const SectionTitle = ({children, ...props}) => <h2 {...props} className={styles.section_title}>{children}</h2>