import { PartialType } from '@nestjs/mapped-types';
import { CreateCvDto } from './create-cv.dto';
import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";
@InputType()
export class UpdateCvDto extends PartialType(CreateCvDto) {

  @Field(()=> Int,{ nullable: true })
  @IsNumber()
  id: number;
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstname: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  cin: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  job: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  path: string;
}
