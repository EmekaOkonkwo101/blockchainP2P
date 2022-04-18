import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GunResolverBase } from "./base/gun.resolver.base";
import { Gun } from "./base/Gun";
import { GunService } from "./gun.service";

@graphql.Resolver(() => Gun)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GunResolver extends GunResolverBase {
  constructor(
    protected readonly service: GunService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
