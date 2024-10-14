import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeWhereInput } from './type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTypeArgs {

    @Field(() => TypeWhereInput, {nullable:true})
    @Type(() => TypeWhereInput)
    where?: TypeWhereInput;
}
