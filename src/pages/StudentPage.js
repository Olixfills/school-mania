import React, { useEffect} from "react";
import useWindowSize from "../hooks/useWindowSize";
// import { Rings } from  'react-loader-spinner'
import Styles from "./Pages.module.css";
import StudentCard from "../components/StudentCard";
import SubjectCard from "../components/SubjectCard";
import CalenderComp from "../components/CalenderComp";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSubjects} from '../features/subJectsSlice'
import { getUserState } from '../features/userSlice';

const StudentPage = () => {
  const subjects = useSelector((state)=> state.subjects?.subjects)
  const userObj = useSelector(getUserState)
  const dispatch = useDispatch()
  const user = userObj.user[0]

  const { width } = useWindowSize();
  const mobile = width <= 768;

  useEffect(()=>{
    dispatch(getAllSubjects())
  }, [dispatch])



  return (
    <div className={Styles.student_detail_container} data-testid="stud-page">
      <div className={Styles.greeting_container} style={{ margin: "50px 0" }}>
        <StudentCard 
          firstname={user?.firstName}
          lastname={user?.lastName}
          level={user?.level}
          tutor={user?.teacher}
          subjects={user?.courses}
        />
        {!mobile && <CalenderComp />}
      </div>
      <h2>Subjects: {subjects.length}</h2>
      <div className={Styles.subjects_grids}>
        {subjects?.map((r) => <Link to={`/subjects/${r.id}`}
          key={r.code} className={Styles.subject_link}>
        <SubjectCard
          image={r.image}
          title={r.title}
          text={r.description}
          code={r.code}
        />
        </Link>)}
      </div>
    </div>
  );
};

export default StudentPage;
