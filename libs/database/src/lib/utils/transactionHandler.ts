import { Connection } from 'mongoose';
import { Logger } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const transactionHandler = async (connection: Connection, dbOperation: Function) => {
  const transactionSession = await connection.startSession();
  transactionSession.startTransaction();
  try {
    const operationResult = await dbOperation();
    await transactionSession.commitTransaction();

    return operationResult;
  } catch (e) {
    await transactionSession.abortTransaction()
    Logger.error(e);
    return e;
  } finally {
    await transactionSession.endSession();
  }
}
