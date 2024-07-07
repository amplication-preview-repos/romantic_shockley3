import { Module } from "@nestjs/common";
import { StopwatchModuleBase } from "./base/stopwatch.module.base";
import { StopwatchService } from "./stopwatch.service";
import { StopwatchController } from "./stopwatch.controller";
import { StopwatchResolver } from "./stopwatch.resolver";

@Module({
  imports: [StopwatchModuleBase],
  controllers: [StopwatchController],
  providers: [StopwatchService, StopwatchResolver],
  exports: [StopwatchService],
})
export class StopwatchModule {}
