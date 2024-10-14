import { registerEnumType } from '@nestjs/graphql';

export enum VehicleMakeScalarFieldEnum {
    id = "id",
    makeId = "makeId",
    makeName = "makeName"
}


registerEnumType(VehicleMakeScalarFieldEnum, { name: 'VehicleMakeScalarFieldEnum', description: undefined })
