import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from 'react-icons-kit';
import {chevronDown} from 'react-icons-kit/fa/chevronDown'

export type User = {
  id_acolhido: string;
  name: string;
  naturalidade: string;
  image: string;
  data_nascimento: string;
};

export const createColumns = (onAlterar?: (idInterno: string) => void): ColumnDef<User>[] => [
  {
    accessorKey: 'nome_acolhido',
    header: ({ column }) => (
      <Button
        variant='ghost'
        className='text-black'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Nome
        <ArrowUpDown className="ml-2 h-4 w-4 text-black" />
      </Button>
    ),
  },
  {
    accessorKey: 'naturalidade',
    header: 'Naturalidade',
    cell: ({ row }) => {
      const value = row.getValue('naturalidade')
      return <div className="font-medium">{value as string}</div>;
    }
  },
  {
    accessorKey: 'data_nascimento',
    header: 'Data de Nascimento',
    cell: ({ row }) => {
      const date = new Date(row.getValue('data_nascimento'));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="h-8 w-8 p-0 border-black hover:bg-slate-700">
              <Icon icon={chevronDown} className='text-gray-500 '/>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                if (onAlterar) {
                  console.log({testeIdInterno: user.id_acolhido})
                  onAlterar(user.id_acolhido.toString());
                }
              }}
            >
              Visualizar/Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Desativar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
