import { IRequest, IResponse } from '../../types/common';
import { errorResponse, successResponse } from '../../utils/apiResponses';
import UserService from './user.service';
import { createUser } from './user.validations';

export const createUsers = async (req: IRequest, res: IResponse) => {
    try {
        const validatedRequest = createUser.parse(req.body);

        const data = await UserService.createUsers(validatedRequest);

        successResponse({ res, data });
    } catch (error) {
        errorResponse({ req, res, error });
    }
};
