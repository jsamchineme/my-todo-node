import chai from 'chai';
import supertest from 'supertest';
import app from '../../app';

export const { expect } = chai;
const server = app.listen(8001);
export const request = supertest(server);
