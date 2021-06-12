import styles from './Title.module.css'

const Title = ({props, children}) => <h1 {...props} className={styles.main_title}>{children}</h1>

export default Title