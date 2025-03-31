import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.headerColumn)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerColumn)}>
              {textFirstCell}
            </th>
            <th className={css(styles.headerColumn)}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.row)}>
            {textFirstCell}
          </td>
          <td className={css(styles.row)}>
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

const styles = StyleSheet.create({
  headerColumn: {
    backgroundColor: "#deb5b545",
  },
  row: {
    backgroundColor: "#f5f5f5ab",
  },
});

export default CourseListRow;
