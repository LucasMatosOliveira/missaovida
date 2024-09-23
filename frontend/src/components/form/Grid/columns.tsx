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
  email: string;
  image: string;
  lastSeen: string;
};

export const createColumns = (onAlterar?: (idInterno: string) => void): ColumnDef<User>[] => [
  {
    accessorKey: 'nome_acolhido',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Nome
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'naturalidade',
    header: 'Naturalidade',
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
                  onAlterar(user.id_acolhido);
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
