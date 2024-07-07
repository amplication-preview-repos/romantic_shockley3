import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LapService } from "./lap.service";
import { LapControllerBase } from "./base/lap.controller.base";

@swagger.ApiTags("laps")
@common.Controller("laps")
export class LapController extends LapControllerBase {
  constructor(protected readonly service: LapService) {
    super(service);
  }
}
