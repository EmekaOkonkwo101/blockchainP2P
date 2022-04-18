/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GunUpdateManyWithoutUsersInput } from "./GunUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => GunUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GunUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GunUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  guns?: GunUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  phoneNumber?: number;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
