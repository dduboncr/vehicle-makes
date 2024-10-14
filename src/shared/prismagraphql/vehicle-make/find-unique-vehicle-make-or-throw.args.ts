import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVehicleMakeOrThrowArgs {

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleMakeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;
}
