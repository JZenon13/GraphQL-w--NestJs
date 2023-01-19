import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateCatDto {
    @Field()
    readonly name: string;
    @Field()
    readonly age: number;
    @Field()
    readonly breed: string;
}