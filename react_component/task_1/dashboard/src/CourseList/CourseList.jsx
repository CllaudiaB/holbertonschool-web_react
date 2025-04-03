import CourseListRow from "./CourseListRow";
import './CourseList.css'


function CourseList({ courses = [] }) {
    return (
        <>
            <table id="CourseList">
                <thead>
                    {courses.length > 0 && (
                        <>
                            <CourseListRow isHeader={true} textFirstCell={"Available courses"} textSecondCell={null} />
                            <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                        </>
                    )}
                </thead>
                <tbody>
                    {courses.length > 0 ? (
                        courses.map(function (cours) {
                            return <CourseListRow
                                key={cours.id}
                                textFirstCell={cours.name}
                                textSecondCell={cours.credit} />;
                        })
                    ) : (
                        <CourseListRow isHeader={true} textFirstCell={"No course available yet"} textSecondCell={null} />
                    )}
                </tbody>

            </table>
        </>
    );
}

export default CourseList;
