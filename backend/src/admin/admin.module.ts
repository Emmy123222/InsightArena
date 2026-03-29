import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLog } from '../analytics/entities/activity-log.entity';
import { Competition } from '../competitions/entities/competition.entity';
import { FlagsModule } from '../flags/flags.module';
import { Market } from '../markets/entities/market.entity';
import { Prediction } from '../predictions/entities/prediction.entity';
import { User } from '../users/entities/user.entity';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Market,
      Prediction,
      Competition,
      ActivityLog,
    ]),
    FlagsModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
