import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleTypeCreateInput } from './vehicle-type-create.input';
import { VehicleTypeUpdateInput } from './vehicle-type-update.input';

@ArgsType()
export class UpsertOneVehicleTypeArgs {

    @Field(() => VehicleTypeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleTypeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>;

    @Field(() => VehicleTypeCreateInput, {nullable:false})
    @Type(() => VehicleTypeCreateInput)
    create!: VehicleTypeCreateInput;

    @Field(() => VehicleTypeUpdateInput, {nullable:false})
    @Type(() => VehicleTypeUpdateInput)
    update!: VehicleTypeUpdateInput;
}
