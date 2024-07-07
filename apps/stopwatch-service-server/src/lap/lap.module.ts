import { Module } from "@nestjs/common";
import { LapModuleBase } from "./base/lap.module.base";
import { LapService } from "./lap.service";
import { LapController } from "./lap.controller";
import { LapResolver } from "./lap.resolver";

@Module({
  imports: [LapModuleBase],
  controllers: [LapController],
  providers: [LapService, LapResolver],
  exports: [LapService],
})
export class LapModule {}
