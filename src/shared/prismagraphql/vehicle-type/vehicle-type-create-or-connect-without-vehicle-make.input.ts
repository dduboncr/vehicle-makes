import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleTypeCreateWithoutVehicleMakeInput } from './vehicle-type-create-without-vehicle-make.input';

@InputType()
export class VehicleTypeCreateOrConnectWithoutVehicleMakeInput {

    @Field(() => VehicleTypeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleTypeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>;

    @Field(() => VehicleTypeCreateWithoutVehicleMakeInput, {nullable:false})
    @Type(() => VehicleTypeCreateWithoutVehicleMakeInput)
    create!: VehicleTypeCreateWithoutVehicleMakeInput;
}
