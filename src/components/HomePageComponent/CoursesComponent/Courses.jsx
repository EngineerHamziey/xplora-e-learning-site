import EachCourse from "./EachCourse"
import Btn from "../Btn"

const Courses = () => {
  return (
    <section className='home__courses'>
      <EachCourse 
        rating="4.9" 
        courseTitle="Anatomy" 
        expectation="Learn the urinary system, including the kidneys, ureters, bladder, and urine production, elimination and alot more."/>

      <EachCourse 
        rating="4.7" 
        courseTitle="Literature" 
        expectation="Develop critical thinking skills, analytical skills, and communication skills, and alot more."/>

      <EachCourse 
        rating="5.0" 
        courseTitle="Government" 
        expectation="Learn the  history of government and political systems, the roles and responsibilities of the government, etc."/>

      <Btn className="btn--purple btn--get-started" type="link" link="#" text="Get Started — for free" />
    </section>
  )
}

export default Courses