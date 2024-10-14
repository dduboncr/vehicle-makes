import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { VehicleMake } from '../vehicle-make/vehicle-make.model';
import { VehicleTypeCount } from './vehicle-type-count.output';

@ObjectType()
export class VehicleType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [VehicleMake], {nullable:true})
    VehicleMake?: Array<VehicleMake>;

    @Field(() => VehicleTypeCount, {nullable:false})
    _count?: VehicleTypeCount;
}
