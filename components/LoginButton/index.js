import styles from './LoginButton.module.css'

export default function LoginButton ({ onPress }) {
  return (
    <button
      id='login'
      className={`${styles['gp-button']} ${styles.raised}`}
      onClick={onPress}
    >
      Connect to Google Photos
    </button>
  )
}
