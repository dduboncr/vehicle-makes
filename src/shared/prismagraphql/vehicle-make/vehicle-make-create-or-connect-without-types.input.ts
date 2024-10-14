import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';

@InputType()
export class VehicleMakeCreateOrConnectWithoutTypesInput {

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleMakeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => VehicleMakeCreateWithoutTypesInput, {nullable:false})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create!: VehicleMakeCreateWithoutTypesInput;
}
