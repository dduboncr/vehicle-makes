import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateInput } from './vehicle-make-create.input';
import { VehicleMakeUpdateInput } from './vehicle-make-update.input';

@ArgsType()
export class UpsertOneVehicleMakeArgs {

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleMakeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => VehicleMakeCreateInput, {nullable:false})
    @Type(() => VehicleMakeCreateInput)
    create!: VehicleMakeCreateInput;

    @Field(() => VehicleMakeUpdateInput, {nullable:false})
    @Type(() => VehicleMakeUpdateInput)
    update!: VehicleMakeUpdateInput;
}
