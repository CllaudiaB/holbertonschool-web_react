import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" style={{ backgroundColor: "#deb5b545" }}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={{ backgroundColor: "#deb5b545" }}>
              {textFirstCell}
            </th>
            <th style={{ backgroundColor: "#deb5b545" }}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td style={{ backgroundColor: "#f5f5f5ab" }}>
            {textFirstCell}
          </td>
          <td style={{ backgroundColor: "#f5f5f5ab" }}>
            {textSecondCell}
          </td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
