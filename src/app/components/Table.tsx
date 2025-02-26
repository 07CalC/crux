import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-purple-500 text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor as string} className="px-4 text-xl py-2 border-b">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 hover:text-gray-900 text-lg">
              {columns.map((col) => (
                <td key={col.accessor as string} className="px-4 py-2 border-b">
                  {row[col.accessor] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
