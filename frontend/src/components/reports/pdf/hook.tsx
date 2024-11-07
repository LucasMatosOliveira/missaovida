import { EstadoUF, EstadoUFDisplay } from "@/components/domains/formulario/entidades";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";

export function useAssinaturaPdfButton({ nomeAcolhido, action, estado }: UseAssinaturaPdfButtonProps) {
    estado ??= EstadoUF.MG;
    const fileName = "TERMO DE RESPONSABILIDADE DE ACOLHIMENTO - " + nomeAcolhido + ' - ' + new Date().getFullYear().toString();
    pdfMake.vfs = pdfFonts.pdfMake?.vfs;
    const date = new Date();
    //action = 'download'
    const details: Content = [
        { text: '7 - TERMO DE RESPONSABILIDADE DE ACOLHIMENTO', style: 'header', alignment: 'center' },
        {
            text: [
                `Declaro que iniciei o Programa de Recuperação para tratamento da dependência química e/ou do estado de vulnerabilidade social em que me encontro no Centro de Recuperação da Missão Vida, na cidade de ______, estado de ${EstadoUFDisplay[estado.toString()]}, no dia ${date.getDate()} de ${date.getMonth() + 1} de ${date.getFullYear()}, permanecendo no local por livre e espontânea vontade.\n\n`,
                'Declaro estar ciente que o Programa de Recuperação é de sete (7) meses e tenho direito de sair para visitas a partir dos três meses e meio (3 ½). O programa é gratuito incluindo: alimentação, internato em regime de residência transitória, assistências: médica, odontológica, psicologia e espiritual.\n\n',
                'Estou disposto a receber o acompanhamento sabendo que o mesmo se baseia em terapias ocupacionais e laborais, psicoterapias breves, convivência em grupo e espiritualidade, tendo eu ainda a disposição em cumprir os horários e regras estabelecidas pela Missão Vida.',
            ],
            style: 'body'
        },
        { text: '\n\n\n' },
        {
            columns: [
              {
                stack: [
                  { text: '________________________', alignment: 'center' },
                  { text: 'Assinatura do Acolhido - Por extenso', alignment: 'center' },
                ],
                width: '40%',
              },
              {
                stack: [
                  { text: '________________________', alignment: 'center' },
                  { text: 'Assinatura do Coordenador do Núcleo', alignment: 'center' },
                ],
                width: '40%',
              }
            ],
            columnGap: 3, // Define um espaço flexível entre as colunas para centralizar
            alignment: 'center' // Centraliza as colunas em relação à página
          },
          {
            stack: [
              { text: '________________________', alignment: 'center', margin: [0, 20, 0, 0] },
              { text: 'Obreiro responsável pelo desligamento', alignment: 'center' }
            ],
            margin: [0, 20, 0, 0]
          }
    ];

    const docDefinitions: TDocumentDefinitions = {
        pageSize: 'A4',
        pageMargins: [40, 50, 40, 40],
        info: {
            title: fileName,
            author: 'Missão Vida'
        },
        content: details,
        styles: {
            header: { fontSize: 16, bold: true, margin: [0, 0, 0, 10] },
            body: { fontSize: 12, lineHeight: 1.5 }
        }
    };

    const generatePDF = () => {
        if (action === 'download') {
            pdfMake.createPdf(docDefinitions).download(fileName);
        } else if (action === 'open') {
            pdfMake.createPdf(docDefinitions).open();
        }
    };

    return {
        generatePDF
    };
}

export interface UseAssinaturaPdfButtonProps {
    nomeAcolhido?: string;
    action: 'open' | 'download';
    estado?: EstadoUF;
}
