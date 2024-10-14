import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Type } from 'class-transformer';
import { VehicleMakeUpdateWithoutTypesInput } from './vehicle-make-update-without-types.input';

@InputType()
export class VehicleMakeUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeUpdateWithoutTypesInput, {nullable:false})
    @Type(() => VehicleMakeUpdateWithoutTypesInput)
    data!: VehicleMakeUpdateWithoutTypesInput;
}
