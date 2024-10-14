import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeCreateManyInput } from './make-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMakeArgs {

    @Field(() => [MakeCreateManyInput], {nullable:false})
    @Type(() => MakeCreateManyInput)
    data!: Array<MakeCreateManyInput>;
}
