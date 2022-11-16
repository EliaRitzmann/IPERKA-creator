import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const exportPDF = async (document) => {
  console.log(document);
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  //date
  var date = new Date();
  var current_date =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

  var docDefinition = {
    watermark: 'iperka generator',
    info: {
        title: 'IPERKA ' + document.documentName,
        author: document.owner,
        subject: 'IPERKA Dokumentation',
        keywords: 'IPERKA',
      },
    footer: function (currentPage, pageCount) {
        if (currentPage !== 1) {
          return [
            {
              text: currentPage.toString() + " von " + pageCount,
              alignment: "center",
            },
          ];
        } else {
          return;
        }
      },
      header: function (currentPage, pageCount, pageSize) {
        // you can apply any logic and return any valid pdfmake element
        if (currentPage !== 1) {
          return [
            
            { columns:  [
                {text: current_date, alignment: "left", margin: 20},
                {text: document.documentName, alignment: "center", margin: 20},
                {text: document.owner, alignment: "right", margin: 20},
            ]},
            
          ];
        } else {
          return;
        }
      },
    content: [
      {
        text: document.documentName, 
        alignment: "center",
        fontSize: 32,
        bold: true

      },
      {
        table: {
                widths: ['*'],
                body: [[" "], [" "]]
        },
        layout: {
            hLineWidth: function(i, node) {
                return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
                return 0;
            },
        }
    },
    {
        text: document.owner,
        alignment: "center",
        fontSize: 12,
      },

      {
        toc: {
          title: {text: 'Inhaltsverzeichniss', style: 'header', margin: [ 0, 50, 0, 0 ]
        }
        }
      },
      {
        text: "1. Informieren",
        style: "header",
        tocItem: true,
        pageBreak: 'before'
      },
      {
        text: "2. Planen",
        style: "header",
        tocItem: true,
      },
      {
        text: "3. Entscheiden",
        style: "header",
        tocItem: true,
      },
      {
        text: "4. Realisieren",
        style: "header",
        tocItem: true,
      },
      {
        text: "5. Kontrolieren",
        style: "header",
        tocItem: true,
      },
      {
        text: "6. Auswerten",
        style: "header",
        tocItem: true,
      },
    ],
    styles: {
        header: {
          fontSize: 22,
          bold: true
        },
        anotherStyle: {
          italics: true,
          alignment: 'right'
        }
      }
  };

  pdfMake.createPdf(docDefinition).open();
};