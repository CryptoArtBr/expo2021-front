import styles from './InfoBox.module.css'

export default function InfoBox ({autorName, links = [], bio, children}) {
  return <div className={styles.info_box}>
  <h2>{autorName}</h2>
  <div>
    {links.map(link => <a className={styles.artist_link} href={link.url}>{link.title}</a>)}
  </div>
  <div>
    <h3>mini bio</h3>
    <p>{bio}</p>
  </div>
  {children}
</div>
}