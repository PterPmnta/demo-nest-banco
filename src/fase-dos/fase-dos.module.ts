import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { TribeModule } from './tribe/tribe.module';
import { RepoModule } from './repo/repo.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [OrganizationModule, TribeModule, RepoModule, MetricsModule]
})
export class FaseDosModule {}
