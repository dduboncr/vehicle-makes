import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVehicleMakeArgs {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;
}
