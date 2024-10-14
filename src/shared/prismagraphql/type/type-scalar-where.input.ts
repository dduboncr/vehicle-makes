import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TypeScalarWhereInput {

    @Field(() => [TypeScalarWhereInput], {nullable:true})
    AND?: Array<TypeScalarWhereInput>;

    @Field(() => [TypeScalarWhereInput], {nullable:true})
    OR?: Array<TypeScalarWhereInput>;

    @Field(() => [TypeScalarWhereInput], {nullable:true})
    NOT?: Array<TypeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    typeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makeId?: StringFilter;
}
