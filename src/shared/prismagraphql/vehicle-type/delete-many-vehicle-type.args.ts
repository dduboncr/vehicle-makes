import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleTypeArgs {

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    @Type(() => VehicleTypeWhereInput)
    where?: VehicleTypeWhereInput;
}
