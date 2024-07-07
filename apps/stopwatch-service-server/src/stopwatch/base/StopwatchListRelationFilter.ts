/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StopwatchWhereInput } from "./StopwatchWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StopwatchListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StopwatchWhereInput,
  })
  @ValidateNested()
  @Type(() => StopwatchWhereInput)
  @IsOptional()
  @Field(() => StopwatchWhereInput, {
    nullable: true,
  })
  every?: StopwatchWhereInput;

  @ApiProperty({
    required: false,
    type: () => StopwatchWhereInput,
  })
  @ValidateNested()
  @Type(() => StopwatchWhereInput)
  @IsOptional()
  @Field(() => StopwatchWhereInput, {
    nullable: true,
  })
  some?: StopwatchWhereInput;

  @ApiProperty({
    required: false,
    type: () => StopwatchWhereInput,
  })
  @ValidateNested()
  @Type(() => StopwatchWhereInput)
  @IsOptional()
  @Field(() => StopwatchWhereInput, {
    nullable: true,
  })
  none?: StopwatchWhereInput;
}
export { StopwatchListRelationFilter as StopwatchListRelationFilter };
