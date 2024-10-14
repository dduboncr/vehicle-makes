import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeCreateInput } from './type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTypeArgs {

    @Field(() => TypeCreateInput, {nullable:false})
    @Type(() => TypeCreateInput)
    data!: TypeCreateInput;
}
