import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleTypeWhereUniqueInput } from './vehicle-type-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleTypeUpdateWithoutVehicleMakeInput } from './vehicle-type-update-without-vehicle-make.input';

@InputType()
export class VehicleTypeUpdateWithWhereUniqueWithoutVehicleMakeInput {

    @Field(() => VehicleTypeWhereUniqueInput, {nullable:false})
    @Type(() => VehicleTypeWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleTypeWhereUniqueInput, 'id' | 'typeId'>;

    @Field(() => VehicleTypeUpdateWithoutVehicleMakeInput, {nullable:false})
    @Type(() => VehicleTypeUpdateWithoutVehicleMakeInput)
    data!: VehicleTypeUpdateWithoutVehicleMakeInput;
}
