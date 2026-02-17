/**
 * Table - Reusable table component with consistent styling
 */
const Table = ({ columns, data, onRowClick, emptyMessage = "No data available" }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4 ${
                  col.align === "right" ? "text-right" : ""
                } ${col.align === "center" ? "text-center" : ""}`}
                style={col.width ? { width: col.width } : {}}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={`group transition-colors ${
                onRowClick
                  ? "cursor-pointer hover:bg-slate-50/80"
                  : "hover:bg-slate-50/50"
              }`}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-3.5 px-4 text-sm ${
                    col.align === "right" ? "text-right" : ""
                  } ${col.align === "center" ? "text-center" : ""}`}
                >
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
