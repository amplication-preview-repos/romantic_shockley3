import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StopwatchService } from "./stopwatch.service";
import { StopwatchControllerBase } from "./base/stopwatch.controller.base";

@swagger.ApiTags("stopwatches")
@common.Controller("stopwatches")
export class StopwatchController extends StopwatchControllerBase {
  constructor(protected readonly service: StopwatchService) {
    super(service);
  }
}
