import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { IsPublic } from 'src/shared/decorators/isPublic';

@IsPublic()
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create() {
    return this.notificationService.sendNotificationWhatsApp();
  }
}
