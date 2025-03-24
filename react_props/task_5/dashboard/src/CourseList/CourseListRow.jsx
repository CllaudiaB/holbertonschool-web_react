function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
    return (
        <>
            <tr>
                {isHeader ? (
                    textSecondCell === null ? <th colspan="2">{textFirstCell}</th> :
                    <><th>{textFirstCell}</th><th>{textSecondCell}</th></>) : 
                    <><td>{textFirstCell}</td><td>{textSecondCell}</td></>}
            </tr>
        </>
    );
}

export default CourseListRow;
