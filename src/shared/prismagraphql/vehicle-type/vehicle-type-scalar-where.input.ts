import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class VehicleTypeScalarWhereInput {

    @Field(() => [VehicleTypeScalarWhereInput], {nullable:true})
    AND?: Array<VehicleTypeScalarWhereInput>;

    @Field(() => [VehicleTypeScalarWhereInput], {nullable:true})
    OR?: Array<VehicleTypeScalarWhereInput>;

    @Field(() => [VehicleTypeScalarWhereInput], {nullable:true})
    NOT?: Array<VehicleTypeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    typeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
