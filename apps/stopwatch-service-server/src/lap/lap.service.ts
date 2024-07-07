import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LapServiceBase } from "./base/lap.service.base";

@Injectable()
export class LapService extends LapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
