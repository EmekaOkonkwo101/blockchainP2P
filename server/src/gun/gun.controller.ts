import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GunService } from "./gun.service";
import { GunControllerBase } from "./base/gun.controller.base";

@swagger.ApiTags("guns")
@common.Controller("guns")
export class GunController extends GunControllerBase {
  constructor(
    protected readonly service: GunService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
