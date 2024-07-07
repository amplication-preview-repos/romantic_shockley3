import * as graphql from "@nestjs/graphql";
import { StopwatchResolverBase } from "./base/stopwatch.resolver.base";
import { Stopwatch } from "./base/Stopwatch";
import { StopwatchService } from "./stopwatch.service";

@graphql.Resolver(() => Stopwatch)
export class StopwatchResolver extends StopwatchResolverBase {
  constructor(protected readonly service: StopwatchService) {
    super(service);
  }
}
