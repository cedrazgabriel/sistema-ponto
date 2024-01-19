import { Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { NotificationService } from './notification.service';

@IsPublic()
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create() {
    return this.notificationService.sendNotificationWhatsApp();
  }
}
