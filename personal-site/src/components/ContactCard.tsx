import classes from '../styles/greetings.module.css'

export default function ContactCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.projectname}>About Me!</span>
          <span className={classes.projectdescription}>
                <ul>
                  <li>I've been inside a volcano, in Iceland!</li>
                  <li>I love movies, my favorite one is Interstellar 🌟</li>
                  <li>I occasionally watch anime, my favorite is Cowboy Bebop</li>
                  <li>I have two pugs that I love, but they love sleeping more 😮‍💨</li>
                  <li>I love hiking and the outdoors, especially during the fall 🍂</li>
                </ul>
        </span>

        <img className={classes.bigimg} src='https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/me-volcano (2).png'></img> 
        </div>
        <span>
                <ul className={classes.contact}>
                  <a href='mailto:bennettoppenheimer@gmail.com'>
                    <li>Email</li>
                  </a>
                  <a href='./src/documents/resume-fin.pdf'>
                    <li>Resume</li>
                  </a> 
                  <a href='tel:7138518614'>
                    <li>Phone</li>
                  </a> 
                </ul>
        </span>
      </div>
  )
}