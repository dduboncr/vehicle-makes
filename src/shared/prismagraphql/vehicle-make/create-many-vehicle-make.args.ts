import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeCreateManyInput } from './vehicle-make-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleMakeArgs {

    @Field(() => [VehicleMakeCreateManyInput], {nullable:false})
    @Type(() => VehicleMakeCreateManyInput)
    data!: Array<VehicleMakeCreateManyInput>;
}
