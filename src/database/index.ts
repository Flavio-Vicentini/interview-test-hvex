import { createConnection, Connection } from "typeorm";

const CreateConnectionDB = async (): Promise<Connection | void> => {
  await createConnection();
};
export { CreateConnectionDB };
