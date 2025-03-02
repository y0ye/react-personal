import classes from '../styles/greetings.module.css'

export default function TechStackCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.greeting}>I'm most comfortable with:</span>
          <span className={classes.name}>
            <img className = {classes.stack} src="./src/styles/imgs/postgresql.png"></img>
            <img className = {classes.stack} src="./src/styles/imgs/express.png"></img>
            <img className = {classes.stack} src="./src/styles/imgs/react.png"></img>
            <img className = {classes.stack} src="./src/styles/imgs/nodejs.png"></img>
            <img className = {classes.stack} src="./src/styles/imgs/typescript.png"></img>
          </span>
          <span className={classes.whoami}>Keep going for projects! (Or look at my GitHub!) ➡️</span>
          <a href="https://github.com/y0ye">
            <img className={classes.bigimg} src='./src/styles/imgs/Octicons-mark-github.svg'></img>
          </a>
        </div>
      </div>
  )
}