import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeUpdateManyMutationInput } from './make-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MakeWhereInput } from './make-where.input';

@ArgsType()
export class UpdateManyMakeArgs {

    @Field(() => MakeUpdateManyMutationInput, {nullable:false})
    @Type(() => MakeUpdateManyMutationInput)
    data!: MakeUpdateManyMutationInput;

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;
}
