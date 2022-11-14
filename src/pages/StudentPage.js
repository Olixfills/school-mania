import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Styles from "./Pages.module.css";
import StudentCard from "../components/StudentCard";
import SubjectCard from "../components/SubjectCard";
import CalenderComp from "../components/CalenderComp";

const StudentPage = () => {
  const { width } = useWindowSize();
  const mobile = width <= 768;

  const run = ['','','','','','','','','']


  return (
    <div className={Styles.student_detail_container}>
      <div className={Styles.greeting_container} style={{ margin: "50px 0" }}>
        <StudentCard />
        {!mobile && <CalenderComp />}
      </div>
      <h2>Subjects: 9</h2>
      <div className={Styles.subjects_grids}>
        {run?.map(r => <SubjectCard
          image="https://res.cloudinary.com/dn4nxz7f0/image/upload/f_auto,q_auto,w_512/zbqy1vsxynu8jorhb8ta.webp"
          title="Mathematics"
          text="Loremvsv ajhcajhvcjh jhcajdcajvcjav jcavdjhcgajvajhv jacgcfuyta ajhgxaig ajufaucfv ja ajgcyuvc"

        />)}
      </div>
    </div>
  );
};

export default StudentPage;
