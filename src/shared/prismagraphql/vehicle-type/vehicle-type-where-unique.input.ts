import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { VehicleMakeListRelationFilter } from '../vehicle-make/vehicle-make-list-relation-filter.input';

@InputType()
export class VehicleTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    typeId?: string;

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    AND?: Array<VehicleTypeWhereInput>;

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    OR?: Array<VehicleTypeWhereInput>;

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    NOT?: Array<VehicleTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => VehicleMakeListRelationFilter, {nullable:true})
    VehicleMake?: VehicleMakeListRelationFilter;
}
