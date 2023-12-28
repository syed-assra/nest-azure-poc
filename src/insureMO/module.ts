import { Module } from '@nestjs/common';
import { InsureMOController } from './controller';
import { InsureMOService } from './service';

@Module({
  imports: [],
  controllers: [InsureMOController],
  providers: [InsureMOService],
})
export class InsureMOModule {}
