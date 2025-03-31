import CourseListRow from "./CourseListRow";


function CourseList({ courses = [] }) {
    return (
        <>
            <table id="CourseList">
                <thead>
                    <CourseListRow isHeader={true} textFirstCell={"Available courses"} textSecondCell={null} />
                    <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                </thead>
                <tbody>
                    {courses.length >= 1 ? (
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
