import { z } from 'zod';

export const createUser = z.object({
    name: z
        .string()
        .min(2, 'User name must be at least 2 characters')
        .max(255, 'User name must be at most 255 characters'),

    email: z
        .string()
        .email('Invalid email format')
        .max(255, 'Email must be at most 255 characters')
});

export type CreateUserType = z.infer<typeof createUser>;
