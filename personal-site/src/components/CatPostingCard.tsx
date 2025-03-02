import classes from '../styles/greetings.module.css'

export default function CatPostingCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.projectname}>Cat Posting</span>
          <span className={classes.projectdescription}>
                <ul>
                    <li>A simple full-stack webapp that uses the PERN stack.</li> 
                    <li>Users, posts, and comments are all stored in a postgres DB.</li>
                    <li>Cat Posting allows for signup, login, creating a post, and creating a comment.</li>
                    <li>Images are uploaded to an AWS S3 bucket and the access link is stored in the posts table.</li>
                    <li>A more detailed write-up on my GitHub <span style={{fontStyle:'italic'}}>(Click the cat!)</span></li>
                </ul>
        </span>
        <span className={classes.techstack}>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/postgresql.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/express.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/react.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/nodejs.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/typescript.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/css.jpg"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/aws.png"></img>
        </span>
          <a href="https://github.com/y0ye">
            <img className={classes.projectimg} src='https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/cat (1).png'></img>
          </a>
        </div>
      </div>
  )
}