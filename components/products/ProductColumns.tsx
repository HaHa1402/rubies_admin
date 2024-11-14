"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
     //Hiển thị cột tiêu đề (title) 
    accessorKey: "title",
    header: "Title",
    //nhấp vào tiêu đề,sẽ chuyển đến trang chi tiết sản phẩm cụ thể đó dựa trên ID của sản phẩm(_id).
    cell: ({ row }) => (
      <Link 
        href={`/products/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },

  //Hiển thị cột loại (category) 
  {
    accessorKey: "category",
    header: "Category",
  },

  //Hiển thị cột bộ sưu tập (collections) 
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },

  //Hiển thị cột giá tiền bán ra (price) 
  {
    accessorKey: "price",
    header: "Price ($)",
  },

 //Hiển thị cột chi phí sản xuất or mua vào của sản phẩm(giá gốc)  
  {
    accessorKey: "expense",
    header: "Expense ($)",
  },

   // Hiển thị một nút Delete cho mỗi sản phẩm
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];
