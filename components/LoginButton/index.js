import styles from './LoginButton.module.css'

export default function LoginButton () {
  return (
    <button id='login' className={`${styles['gp-button']} ${styles.raised}`}>
      Connect to Google Photos
    </button>
  )
}
