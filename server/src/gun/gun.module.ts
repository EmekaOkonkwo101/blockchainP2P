import { Module } from "@nestjs/common";
import { GunModuleBase } from "./base/gun.module.base";
import { GunService } from "./gun.service";
import { GunController } from "./gun.controller";
import { GunResolver } from "./gun.resolver";

@Module({
  imports: [GunModuleBase],
  controllers: [GunController],
  providers: [GunService, GunResolver],
  exports: [GunService],
})
export class GunModule {}
