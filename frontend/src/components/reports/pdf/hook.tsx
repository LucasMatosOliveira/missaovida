import { EstadoUF, EstadoUFDisplay } from "@/components/domains/formulario/entidades";
import { InternosInsaltSchema } from "@/components/domains/formulario/schema";
import { useAppFormContext } from "@/components/form/hook";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";

export function useAssinaturaPdfButton({ nomeAcolhido, action, estado }: UseAssinaturaPdfButtonProps) {
    estado ??= EstadoUF.MG;
    const fileName = "TERMO DE RESPONSABILIDADE DE ACOLHIMENTO - " + nomeAcolhido + ' - ' + new Date().getFullYear().toString();
    pdfMake.vfs = pdfFonts.pdfMake?.vfs;
    const date = new Date();
    //action = 'download'

    const { watch, getValues} = useAppFormContext<InternosInsaltSchema>();
    const dadosAlta = watch('alta');
    let motivoAlta = 'N/A';
    if (dadosAlta?.altaTerapeutica) {
        motivoAlta = 'Alta Terapêutica (Conclusão)';
    } else if (dadosAlta?.altaDesistencia) {
        motivoAlta = 'Desistência (Alta a pedido)';
    } else if (dadosAlta?.altaAdministrativa) {
        motivoAlta = 'Alta Administrativa (Desligamento)';
    } else if (dadosAlta?.altaAbandono) {
        motivoAlta = 'Abandono (Evasão ou fuga)';
    } else if (dadosAlta?.altaJudicial) {
        motivoAlta = 'Decisão Judiciária/Procedimento Policial';
    } else if (dadosAlta?.altaFalecimento) {
        motivoAlta = 'Falecimento';
    }
    const details: Content = [
        { text: 'TERMO DE ALTA DO ACOLHIDO', style: 'header', alignment: 'center' },
        {
          text: [
              `Nome: ${getValues('name') ?? 'N/A'}\n`,
              `Motivo da Alta: ${motivoAlta}\n`,
              `Justificativa: ${dadosAlta?.justificativaAlta ?? 'N/A'}\n`,
              `Núcleo: ${dadosAlta?.nucleoAlta ?? 'N/A'}\n`,
              `Data: ${dadosAlta?.dataAlta ?? 'N/A'}\n`,
          ],
          style: 'body'
      },
        { text: '\n\n\n' },
        {
            columns: [
              {
                stack: [
                  { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1 }], alignment: 'left' },
                  { text: '\nAssinatura do Acolhido - Por extenso', alignment: 'center' },
                ],
                width: '50%',
                margin: [0, 0, 0, 0],
                alignment: 'left'
              },
              {
                stack: [
                  { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1 }], alignment: 'right' },
                  { text: '\nAssinatura do Coordenador do Núcleo', alignment: 'center' },
                ],
                width: '50%',
                margin: [0, 0, 0, 0],
                alignment: 'right'
              }
            ],
            columnGap: 150,
            alignment: 'center'
          },
          {
            stack: [
              { text: '\n\n\n' },
              { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1 }], alignment: 'center' },
              { text: '\nObreiro responsável pelo desligamento', alignment: 'center',  }
            ],
            alignment: 'center'
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
