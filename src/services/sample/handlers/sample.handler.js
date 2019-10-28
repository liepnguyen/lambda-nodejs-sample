import dynamo from 'dynamodb';
import Joi from 'joi';

export async function index(event) {
  const Account = dynamo.define('Account', {
    hashKey : 'email',
   
    // add the timestamp attributes (updatedAt, createdAt)
    timestamps : true,
   
    schema : {
      email   : Joi.string().email(),
      name    : Joi.string().required(),
      age     : Joi.number(),
    }
  });

  Account.create({
    name: 'Liep'
  });

  Joi.string().email();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

export async function get(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

export async function create(event) {
  return {
    statusCode: 200
  }
}

export async function update(event) {
  return {
    statusCode: 200
  }
}

export async function remove(event) {
  return {
    statusCode: 200
  }
}