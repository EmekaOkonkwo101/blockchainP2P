import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GunServiceBase } from "./base/gun.service.base";

@Injectable()
export class GunService extends GunServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
