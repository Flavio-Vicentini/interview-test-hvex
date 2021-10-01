import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column()
  last_access: Date;
}
export { User };
