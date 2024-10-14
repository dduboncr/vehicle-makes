import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleMakeUpdateWithoutTypesInput } from './vehicle-make-update-without-types.input';

@InputType()
export class VehicleMakeUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleMakeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => VehicleMakeUpdateWithoutTypesInput, {nullable:false})
    @Type(() => VehicleMakeUpdateWithoutTypesInput)
    data!: VehicleMakeUpdateWithoutTypesInput;
}
