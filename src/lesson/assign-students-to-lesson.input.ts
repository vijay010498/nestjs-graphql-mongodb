import { Field, InputType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true }) // 4 = uuid v4, each  = valdiate array of Id's
  @Field((type) => [ID])
  studentIds: string[];
}
