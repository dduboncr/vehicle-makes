import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeCreateManyMakeInput } from './type-create-many-make.input';
import { Type } from 'class-transformer';

@InputType()
export class TypeCreateManyMakeInputEnvelope {

    @Field(() => [TypeCreateManyMakeInput], {nullable:false})
    @Type(() => TypeCreateManyMakeInput)
    data!: Array<TypeCreateManyMakeInput>;
}
