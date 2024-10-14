import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VehicleMakeScalarWhereInput {

    @Field(() => [VehicleMakeScalarWhereInput], {nullable:true})
    AND?: Array<VehicleMakeScalarWhereInput>;

    @Field(() => [VehicleMakeScalarWhereInput], {nullable:true})
    OR?: Array<VehicleMakeScalarWhereInput>;

    @Field(() => [VehicleMakeScalarWhereInput], {nullable:true})
    NOT?: Array<VehicleMakeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    makeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makeName?: StringFilter;
}
