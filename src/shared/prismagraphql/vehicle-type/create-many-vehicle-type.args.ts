import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeCreateManyInput } from './vehicle-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVehicleTypeArgs {

    @Field(() => [VehicleTypeCreateManyInput], {nullable:false})
    @Type(() => VehicleTypeCreateManyInput)
    data!: Array<VehicleTypeCreateManyInput>;
}
