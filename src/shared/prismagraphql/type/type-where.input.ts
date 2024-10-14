import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MakeRelationFilter } from '../make/make-relation-filter.input';

@InputType()
export class TypeWhereInput {

    @Field(() => [TypeWhereInput], {nullable:true})
    AND?: Array<TypeWhereInput>;

    @Field(() => [TypeWhereInput], {nullable:true})
    OR?: Array<TypeWhereInput>;

    @Field(() => [TypeWhereInput], {nullable:true})
    NOT?: Array<TypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    typeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makeId?: StringFilter;

    @Field(() => MakeRelationFilter, {nullable:true})
    make?: MakeRelationFilter;
}
