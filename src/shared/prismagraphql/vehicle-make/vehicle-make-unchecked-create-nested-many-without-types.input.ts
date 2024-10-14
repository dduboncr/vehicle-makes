import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateOrConnectWithoutTypesInput } from './vehicle-make-create-or-connect-without-types.input';
import { Prisma } from '@prisma/client';
import { VehicleMakeWhereUniqueInput } from './vehicle-make-where-unique.input';

@InputType()
export class VehicleMakeUncheckedCreateNestedManyWithoutTypesInput {

    @Field(() => [VehicleMakeCreateWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create?: Array<VehicleMakeCreateWithoutTypesInput>;

    @Field(() => [VehicleMakeCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => VehicleMakeCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<VehicleMakeCreateOrConnectWithoutTypesInput>;

    @Field(() => [VehicleMakeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleMakeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleMakeWhereUniqueInput, 'id' | 'makeId'>>;
}
