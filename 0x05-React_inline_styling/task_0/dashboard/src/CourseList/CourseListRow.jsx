import PropTypes from "prop-types";

function CourseListRow({ isHeader = true, textFirstCell = "", textSecondCell = null }) {
    return (
        <>
            <tr>
                {isHeader ? (
                    textSecondCell === null ? (
                        <th colSpan={2} style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</th>
                    ) : (
                        <tr>
                        <>
                            <th style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</th>
                            <th style={{ backgroundColor: "#deb5b545" }}>{textSecondCell}</th>
                        </>
                        </tr>
                    )
                ) : (
                    <tr>
                    <>
                        <td style={{ backgroundColor: "#f5f5f5ab" }}>{textFirstCell}</td>
                        <td style={{ backgroundColor: "#f5f5f5ab" }}>{textSecondCell}</td>
                    </>
                    </tr>
                )}
            </tr>
        </>
    );
};

export default CourseListRow;

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string,
  };
