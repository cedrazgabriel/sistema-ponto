import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class NotificationService {
  async sendNotificationWhatsApp() {
    const accountSid = 'inseriraqui';
    const authToken = 'inseriraui';

    const client = new Twilio(accountSid, authToken);

    client.messages
      .create({
        from: 'whatsapp:+12062025536', // From a valid Twilio number
        body: 'Hello from twilio-node',
        to: 'whatsapp:+5571991747951', // Text your number
      })
      .then((message) => console.log(message.sid));
  }
}
