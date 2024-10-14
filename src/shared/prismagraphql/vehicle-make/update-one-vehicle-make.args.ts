import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeUpdateInput } from './vehicle-make-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';

@ArgsType()
export class UpdateOneVehicleMakeArgs {

    @Field(() => VehicleMakeUpdateInput, {nullable:false})
    @Type(() => VehicleMakeUpdateInput)
    data!: VehicleMakeUpdateInput;

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleMakeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;
}
