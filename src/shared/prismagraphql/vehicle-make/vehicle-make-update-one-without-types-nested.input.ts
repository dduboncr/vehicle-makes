import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateOrConnectWithoutTypesInput } from './vehicle-make-create-or-connect-without-types.input';
import { VehicleMakeUpsertWithoutTypesInput } from './vehicle-make-upsert-without-types.input';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';
import { VehicleMakeUpdateToOneWithWhereWithoutTypesInput } from './vehicle-make-update-to-one-with-where-without-types.input';

@InputType()
export class VehicleMakeUpdateOneWithoutTypesNestedInput {

    @Field(() => VehicleMakeCreateWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create?: VehicleMakeCreateWithoutTypesInput;

    @Field(() => VehicleMakeCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: VehicleMakeCreateOrConnectWithoutTypesInput;

    @Field(() => VehicleMakeUpsertWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeUpsertWithoutTypesInput)
    upsert?: VehicleMakeUpsertWithoutTypesInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    disconnect?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    delete?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeWhereUniqueInput, {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => VehicleMakeUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => VehicleMakeUpdateToOneWithWhereWithoutTypesInput)
    update?: VehicleMakeUpdateToOneWithWhereWithoutTypesInput;
}
