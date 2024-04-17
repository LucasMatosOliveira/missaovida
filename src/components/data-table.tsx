import { useEffect, useState } from 'react'
import './styles.css'

import {
  ColumnDef,
  flexRender,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { abaCadastro } from '@/store/state'
import { MainCardCadastro } from '@/pages/cadastro'


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  // const { abaAtivaId, abas } = useTabBar({ menuId: 'seuMenuId', aba: 'suaAba', abaId: 'seuAbaId' });
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [isAbaAtiva, setIsAbaAtiva] = useState(abaCadastro.aba);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    abaCadastro.aba = true;
    setIsAbaAtiva(true);
    console.log(event);
  }

  console.log('1', abaCadastro.aba)
  useEffect(() => {
    setIsAbaAtiva(abaCadastro.aba);
  }, [abaCadastro.aba]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })
  const handleVoltar = () => {
    <DataTable columns={columns} data={data} />
    console.log("teste")
  };

  return (
    <>
      {isAbaAtiva ? <MainCardCadastro onVoltar={handleVoltar} /> :
        <>
          {/*<h1 className='mb-6 text-3xl font-bold '>
          Internos
        </h1> */}
          <img src="https://revwildodosanjos.com.br/wp-content/themes/revwildo-spa/assets/images/vida.png" alt="" className='logo' />

          <div className='flex items-center justify-between'>
            <div className='pr-4'>
              <Button variant='outline' className='ml-auto' onClick={handleClick}>
                Novo Interno
              </Button>
            </div>
            <div className='flex items-center py-4'>
              <Input
                placeholder='Procurar por nome...'
                value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                onChange={event =>
                  table.getColumn('name')?.setFilterValue(event.target.value)
                }
                className='max-w-sm'
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='ml-auto'>
                  Colunas
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                {table
                  .getAllColumns()
                  .filter(column => column.getCanHide())
                  .map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='capitalize'
                        checked={column.getIsVisible()}
                        onCheckedChange={value => column.toggleVisibility(!!value)}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='rounded-md border'>
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map(row => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>
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
                      className='h-24 text-center'
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className='flex items-center justify-end space-x-2 py-4'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Próxima
            </Button>
          </div>
        </>
      }
    </>
  )
}