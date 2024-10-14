import { registerEnumType } from '@nestjs/graphql';

export enum MakeScalarFieldEnum {
    id = "id",
    makeId = "makeId",
    makeName = "makeName"
}


registerEnumType(MakeScalarFieldEnum, { name: 'MakeScalarFieldEnum', description: undefined })
