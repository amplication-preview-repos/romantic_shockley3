import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StopwatchServiceBase } from "./base/stopwatch.service.base";

@Injectable()
export class StopwatchService extends StopwatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
