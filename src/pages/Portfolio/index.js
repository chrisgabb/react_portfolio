import React, { useState } from "react"
import Navbar from "../../components/NavBar";
import CustomCard from "../../components/Card";
import projectInfo from "../../project-info.json"
import Footer from "../../components/Footer";



function Portfolio() {
  const [projectWork, setProjectWork] = useState(projectInfo)

  return (<>


      <Navbar />
      <div className="wrapper">
        {projectWork.map((project) => (

          <CustomCard
            id={project.id}
            title={project.title}
            image={project.image}
            altImage={project.altImage}
            bodyText={project.bodyText}
            buttonLink={project.buttonLink}
          />

        ))}

      </div>


      <Footer />

  </>);
}

export default Portfolio;