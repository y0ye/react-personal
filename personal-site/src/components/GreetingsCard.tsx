import classes from '../styles/greetings.module.css'

export default function GreetingsCard() {
  return (
      <div className={classes.cardintro}>
        <div className={classes.nameheader}>
          <span className={classes.greeting}>Hello 👋, I'm</span>
          <span className={classes.name}>Bennett Oppenheimer</span>
          <span className={classes.whoami}>Frontend & Full-Stack Software Engineer 👨🏻‍💻</span>
          <span className={classes.tip}>Swipe Left!</span>
          <a href="https://www.linkedin.com/in/bennett-oppenheimer-b26076230/">
            <img className={classes.bigimg} src='/imgs/image1.png'></img>
          </a>
        </div>
      </div>
  )
}