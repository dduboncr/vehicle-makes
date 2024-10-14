import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeCreateWithoutVehicleMakeInput } from './vehicle-type-create-without-vehicle-make.input';
import { Type } from 'class-transformer';
import { VehicleTypeCreateOrConnectWithoutVehicleMakeInput } from './vehicle-type-create-or-connect-without-vehicle-make.input';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';

@InputType()
export class VehicleTypeUncheckedCreateNestedManyWithoutVehicleMakeInput {

    @Field(() => [VehicleTypeCreateWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeCreateWithoutVehicleMakeInput)
    create?: Array<VehicleTypeCreateWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeCreateOrConnectWithoutVehicleMakeInput], {nullable:true})
    @Type(() => VehicleTypeCreateOrConnectWithoutVehicleMakeInput)
    connectOrCreate?: Array<VehicleTypeCreateOrConnectWithoutVehicleMakeInput>;

    @Field(() => [VehicleTypeWhereUniqueInput], {nullable:true})
    @Type(() => VehicleTypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>>;
}
