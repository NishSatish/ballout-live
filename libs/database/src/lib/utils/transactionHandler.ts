import { Connection } from 'mongoose';
import { Logger } from '@nestjs/common';

export const transactionHandler = async <T>(
	connection: Connection,
	dbOperation: Function
) => {
	const transactionSession = await connection.startSession();
	transactionSession.startTransaction();
	try {
		const operationResult = await dbOperation();
		await transactionSession.commitTransaction();

		return operationResult as T;
	} catch (e) {
		await transactionSession.abortTransaction();
		Logger.error(e);
		return { error: e };
	} finally {
		await transactionSession.endSession();
	}
};
