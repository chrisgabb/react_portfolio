
import { Button, Jumbotron } from 'reactstrap';



const CustomJumbotron = (prop) => {

  return (
    <Jumbotron>
      <h1 className="jumboHeading display-3">Hello, world!</h1>
      <p className="jumboBodyText lead">Welcome to My Portfolio Page,</p>
      <p className="jumboBodyText lead">I am a full stack developer and graduate of the University of North Carolina at Charlotte Full Stack We Development Bootcamp.
      My prior professional experience is in Accounting and Financial Operations automation leveraging SQL, Alteryx and Excel.
      I realized I had found my true-calling [software development] after working closely with development teams on various automation
      projects. After expirimenting with JavaScript I knew that I wanted to make coding my career. I am well versed ReactJS, NodeJS and SQL
      and NoSQL databases (including MongoDB). I have developed and deployed several applications using a MERN stack. I am a lifelong
                                         my and excited to begin my career in software development. </p>

      <hr className="my-2" />
      <p className="jumboFYIText">Please dont forget to check out my resume and portfolio (linked in the NavBar).</p>
      {/* <p className="jumboButton lead">
        <Button color="dark">Learn More</Button>
      </p> */}
    </Jumbotron>
  )
}

export default CustomJumbotron