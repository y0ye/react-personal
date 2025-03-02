import classes from '../styles/greetings.module.css'

export default function GreetingsCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.greeting}>I'm a Software Engineering student at:</span>
          <span className={classes.name}>UT Dallas 💫</span>
          <span className={classes.whoami}>Graduating May 2025 🎓</span>
          <img className={classes.bigimg} src='./src/styles/imgs/UT_Dallas_Monogram_-_2_color_(Updated).jpg'></img> 
        </div>
      </div>
  )
}