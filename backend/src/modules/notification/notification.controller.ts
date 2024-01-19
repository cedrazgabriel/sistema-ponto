import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { NotificationService } from './notification.service';

@IsPublic()
@ApiTags('notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create() {
    return this.notificationService.sendNotificationWhatsApp();
  }
}
