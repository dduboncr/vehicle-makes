import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeUpdateManyMutationInput } from './type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TypeWhereInput } from './type-where.input';

@ArgsType()
export class UpdateManyTypeArgs {

    @Field(() => TypeUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeUpdateManyMutationInput)
    data!: TypeUpdateManyMutationInput;

    @Field(() => TypeWhereInput, {nullable:true})
    @Type(() => TypeWhereInput)
    where?: TypeWhereInput;
}
