import classes from '../styles/greetings.module.css'

export default function CapstoneCard() {
  return (
      <div className={classes.cardabout}>
        <div className={classes.nameheader}>
          <span className={classes.projectname}>Argo Data</span>
          <span className={classes.projectdescription}>
                <ul>
                    <li>An intelligent marketing analytics dashboard.</li> 
                    <li>This dashboard displays data from their GA4 data cloud.</li>
                    <li>Used data supplied to generate a weekly AI insight and AI chat.</li>
                    <li>Our team used MaterialUI for our components and corporate design.</li>
                    <li>Video analytics, user analytics, and site analytics are displayed via recharts.</li>
                    <li>No write up or project file available.</li>
                </ul>
        </span>
        <span className={classes.techstack}>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/express.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/react.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/nodejs.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/typescript.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/google_cloud.png"></img>
            <img className = {classes.stack} src="https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/gpt.png"></img>

        </span>
          <a href="https://argodata.com/">
            <img className={classes.projectimg} src='https://personal-site-react.s3.us-east-1.amazonaws.com/imgs/argo.png'></img>
          </a>
        </div>
      </div>
  )
}