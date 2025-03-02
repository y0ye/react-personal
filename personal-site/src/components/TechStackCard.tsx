import classes from '../styles/greetings.module.css'

export default function TechStackCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.greeting}>I'm most comfortable with:</span>
          <span className={classes.name}>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/postgresql.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/express.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/react.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/nodejs.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/typescript.png"></img>
          </span>
          <span className={classes.whoami}>Keep going for projects! (Or look at my GitHub!) ➡️</span>
          <a href="https://github.com/y0ye">
            <img className={classes.bigimg} src='https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/Octicons-mark-github.svg'></img>
          </a>
        </div>
      </div>
  )
}