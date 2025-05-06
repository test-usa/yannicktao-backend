import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './main/auth/auth.module';
import { ProgressModule } from './main/progress/progress.module';
import { ServiceModule } from './main/service/service.module';
import { FeedbackModule } from './main/feedback/feedback.module';
import { MessageModule } from './main/message/message.module';
import { ConversationModule } from './main/conversation/conversation.module';
import { AdminModule } from './main/admin/admin.module';
import { EngineerModule } from './main/engineer/engineer.module';
import { CustomerModule } from './main/customer/customer.module';
import { UserModule } from './main/user/user.module';
import { AuthModule } from './main/auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, CustomerModule, EngineerModule, AdminModule, ConversationModule, MessageModule, FeedbackModule, ServiceModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
