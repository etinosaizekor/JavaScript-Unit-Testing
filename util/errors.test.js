import {describe, it, expect} from 'vitest'
import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
  it('should create an HttpError instance with the provided properties', () => {
    const statusCode = 404;
    const message = 'Not Found';
    const data = { details: 'Resource not found' };

    const error = new HttpError(statusCode, message, data);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });
});

it('should create ValidationError instance with the provided properties', () => {
    const message = "Error occured"

    const error = new ValidationError(message)

    expect(error.message).toBe(message)
})
