import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateCvDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  firstname: string;

  @Field()
  @IsNumber()
  age: number;

  @Field()
  @IsString()
  cin: string;

  @Field()
  @IsString()
  job: string;

  @Field()
  @IsString()
  path: string;
}
