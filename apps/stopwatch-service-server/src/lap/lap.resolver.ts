import * as graphql from "@nestjs/graphql";
import { LapResolverBase } from "./base/lap.resolver.base";
import { Lap } from "./base/Lap";
import { LapService } from "./lap.service";

@graphql.Resolver(() => Lap)
export class LapResolver extends LapResolverBase {
  constructor(protected readonly service: LapService) {
    super(service);
  }
}
