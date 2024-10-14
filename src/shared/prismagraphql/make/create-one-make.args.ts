import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeCreateInput } from './make-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMakeArgs {

    @Field(() => MakeCreateInput, {nullable:false})
    @Type(() => MakeCreateInput)
    data!: MakeCreateInput;
}
