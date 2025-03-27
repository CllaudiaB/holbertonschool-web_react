function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
    return (
        <>
            <tr style={{backgroundColor:"#f5f5f5ab"}}>
                {isHeader ? (
                    textSecondCell === null ? <th colSpan="2">{textFirstCell}</th> :
                    <><th style={{backgroundColor:"#deb5b545"}}>{textFirstCell}</th><th>{textSecondCell}</th></>) : 
                    <><td>{textFirstCell}</td><td>{textSecondCell}</td></>}
            </tr>
        </>
    );
}

export default CourseListRow;
