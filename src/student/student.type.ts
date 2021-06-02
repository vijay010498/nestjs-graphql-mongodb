import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student') // for easy name convention
export class StudentType {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
