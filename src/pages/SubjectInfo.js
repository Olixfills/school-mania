import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Styles from "./Pages.module.css";
import { GiTeacher, GiPerson } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import SingleSubjectHeader from "../components/SingleSubjectHeader";
import TopicCard from "../components/TopicCard";

const SubjectInfo = () => {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3008/subjects/${subjectId}`)
      .then((res) => res.json())
      .then((result) => setSubject(result))
      .catch(console.log);
  }, [subjectId]);

  console.log(subject);
  return (
    <div data-testid="subject">
      <div className={Styles.breadcrumbs}>
        <Link to="/student">Home</Link> > {subject.title}
      </div>
      <SingleSubjectHeader image={subject.image} />
      <main className={Styles.student_detail_container}>
        <h2>{subject.title}</h2>
        <h5>{subject.description}</h5>

        <div className={Styles.subject_stats}>
          <h6>
            <GiTeacher />: Miss Wendy
          </h6>
          <h6>
            <GiPerson />: 24
          </h6>
          <h6>
            <AiFillCode />: {subject.code}
          </h6>
        </div>

        <h3>Topics</h3>
        <div className={Styles.topic_container}>
          {subject?.topics?.map((topic, ind) => (
            <TopicCard key={topic.title} title={topic.title} 
            resources={topic.resources}
            time={topic.time}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SubjectInfo;
