"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import MissingIcon from "@/components/MissingIcon";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data = [],
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,

    state: {
      columnFilters,
      rowSelection,
    },
  });

  return (
    <>
      <div className="w-full bg-white mb-8">
        <div className="flex space-x-3 justify-between items-center mx-auto p-7 border-b-2 pb-8 rounded-md">
          <h1>All Products</h1>
          <div>
            <Input
              placeholder="Filter orders by status..."
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("status")?.setFilterValue(event.target.value)
              }
              className="max-w-lg p-3 rounded-sm shadow-none"
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 mb-5">
          <div>
            <h5 className="mb-2 text-gray-700">Filter By Group</h5>
            <Input
              placeholder=""
              className="p-5 w-full rounded-sm shadow-none"
              type="text"
            />
          </div>
          <div>
            <h5 className="mb-2 text-gray-700">Filter By Product Type</h5>
            <Input
              placeholder=""
              className="p-5 w-full rounded-sm shadow-none"
              type="text"
            />
          </div>
          <div>
            <h5 className="mb-2 text-gray-700">Filter By Category</h5>
            <Input
              placeholder=""
              className="p-5 w-full rounded-sm shadow-none"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="rounded-md border-2 bg-white p-7">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-gray-100 text-left"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-5 text-left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center p-5"
                >
                  <MissingIcon />
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
