
import { PropsWithChildren } from 'react';
import './globals.css'; // Importe seus estilos globais aqui, se aplicável

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="root-layout">
      {children}
    </div>
  );
}

export default RootLayout;
