import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { readFileSync } from 'fs';

@Injectable()
export class NotificationService {
  async sendNotificationWhatsApp() {
    const idInstancia = 'colocarIdInstancia';
    const tokenInstancia = 'colocarTokenIntancia';
    const clientToken = 'colocarClientToken';
    const baseUrl = `https://api.z-api.io/instances/${idInstancia}/token/${tokenInstancia}/send-text`;

    const contatos = [
      {
        name: 'Gabriel Cedraz',
        phone: '5571991747951',
      },
    ];

    const arquivoPdf = readFileSync('meu/caminho/do/arquivo.pdf');

    const arquivoBase64 = arquivoPdf.toString('base64');

    for (const contato of contatos) {
      const body = {
        phone: contato.phone,
        caption: 'É o último, prometo! kk',
        fileName: 'testeEnvioPdf',
        document: 'data:application/pdf;base64,' + arquivoBase64,
        delayMessage: 10,
      };

      axios
        .post(baseUrl, body, {
          headers: {
            'Client-Token': clientToken,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          // Lidere com a resposta da requisição
          console.log(response.data);
        })
        .catch((error) => {
          // Lidere com erros da requisição
          console.error(error);
        });
    }
  }
}
