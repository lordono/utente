import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import cx from "clsx";
import styles from "./styles.css";

/**
 * ## When to use
 * - To display a collection of structured data.
 * - To sort, search, paginate, filter data.
 *
 * ## How to use
 * - Specify `data` and `columns` of Table
 * - `data` should be an array with key being column and value being data
 * - `columns` should be an array with `accessor` key being the column
 * - Refer to [react-table](https://react-table.tanstack.com/) for more information.
 */
const Table = ({ theme, columns, data, className, children, ...rest }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const tableClasses = cx(
    styles.table,
    theme === "dark" && styles.dark,
    className
  );

  // render header
  const renderHeader = React.useMemo(
    () =>
      headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()} className={styles.table_header}>
              {column.render("Header")}
            </th>
          ))}
        </tr>
      )),
    [headerGroups]
  );

  // render rows
  const renderRows = React.useMemo(
    () =>
      rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} className={styles.table_row}>
            {row.cells.map(cell => {
              return (
                <td {...cell.getCellProps()} className={styles.table_cell}>
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      }),
    [rows]
  );

  return (
    <table {...getTableProps()} className={tableClasses} {...rest}>
      <thead>{renderHeader}</thead>
      <tbody {...getTableBodyProps()}>{renderRows}</tbody>
    </table>
  );
};

Table.defaultProps = {
  theme: "light",
  columns: [],
  data: []
};

Table.propTypes = {
  /**
   * color theme
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * column data
   */
  columns: PropTypes.arrayOf(PropTypes.any),
  /**
   * data source
   */
  data: PropTypes.arrayOf(PropTypes.any),
  /**
   * wrapper-div class
   */
  className: PropTypes.string,
  /**
   * wrapper-div style
   */
  style: PropTypes.object
};

export { Table };
