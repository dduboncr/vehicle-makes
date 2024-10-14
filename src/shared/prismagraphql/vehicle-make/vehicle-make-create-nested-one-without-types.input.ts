import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateOrConnectWithoutTypesInput } from './vehicle-make-create-or-connect-without-types.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';

@InputType()
export class VehicleMakeCreateNestedOneWithoutTypesInput {

    @Field(() => VehicleMakeCreateWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create?: VehicleMakeCreateWithoutTypesInput;

    @Field(() => VehicleMakeCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: VehicleMakeCreateOrConnectWithoutTypesInput;

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;
}
