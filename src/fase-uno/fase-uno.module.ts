import { Module } from '@nestjs/common';
import { FaseUnoService } from './fase-uno.service';
import { FaseUnoController } from './fase-uno.controller';

@Module({
  controllers: [FaseUnoController],
  providers: [FaseUnoService],
})
export class FaseUnoModule {}
