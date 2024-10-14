import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMakeArgs {

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;
}
