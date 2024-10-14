import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeUpdateInput } from './vehicle-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';

@ArgsType()
export class UpdateOneVehicleTypeArgs {

    @Field(() => VehicleTypeUpdateInput, {nullable:false})
    @Type(() => VehicleTypeUpdateInput)
    data!: VehicleTypeUpdateInput;

    @Field(() => VehicleTypeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleTypeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>;
}
