export const expiryColumnDef = [
  {
    header: "Batch Number",
    accessorKey: "batch_number",
    cell: ({ row }) => row.original.batch_number,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => row.original.name,
  },
  {
    header: "Expiry Date",
    accessorKey: "expiry_date",
    cell: ({ row }) => row.original.expiry_date,
  },
  {
    header: "Days to Expiration",
    accessorKey: "expiry_date",
    cell: ({ row }) => {
      const expiryDate = parseISO(row.original.expiry_date);
      const today = new Date();
      const daysToExpiration = differenceInDays(expiryDate, today);
      return <Box>{daysToExpiration}</Box>;
    },
  },
  {
    header: "Status",
    accessorKey: "expiry_date",
    cell: ({ row }) => {
      const expiryDate = parseISO(row.original.expiry_date);
      const today = new Date();
      const isExpired = expiryDate < today;
      return <Box>{isExpired ? "Expired" : "Not Expired"}</Box>;
    },
  },
];
