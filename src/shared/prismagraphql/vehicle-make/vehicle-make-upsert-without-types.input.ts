import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeUpdateWithoutTypesInput } from './vehicle-make-update-without-types.input';
import { Type } from 'class-transformer';
import { VehicleMakeCreateWithoutTypesInput } from './vehicle-make-create-without-types.input';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';

@InputType()
export class VehicleMakeUpsertWithoutTypesInput {

    @Field(() => VehicleMakeUpdateWithoutTypesInput, {nullable:false})
    @Type(() => VehicleMakeUpdateWithoutTypesInput)
    update!: VehicleMakeUpdateWithoutTypesInput;

    @Field(() => VehicleMakeCreateWithoutTypesInput, {nullable:false})
    @Type(() => VehicleMakeCreateWithoutTypesInput)
    create!: VehicleMakeCreateWithoutTypesInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;
}
