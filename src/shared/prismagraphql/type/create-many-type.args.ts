import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeCreateManyInput } from './type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTypeArgs {

    @Field(() => [TypeCreateManyInput], {nullable:false})
    @Type(() => TypeCreateManyInput)
    data!: Array<TypeCreateManyInput>;
}
