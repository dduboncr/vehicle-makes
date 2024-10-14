import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { VehicleMakeListRelationFilter } from '../vehicle-make/vehicle-make-list-relation-filter.input';

@InputType()
export class VehicleTypeWhereInput {

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    AND?: Array<VehicleTypeWhereInput>;

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    OR?: Array<VehicleTypeWhereInput>;

    @Field(() => [VehicleTypeWhereInput], {nullable:true})
    NOT?: Array<VehicleTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    typeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => VehicleMakeListRelationFilter, {nullable:true})
    VehicleMake?: VehicleMakeListRelationFilter;
}
