# GPT Service API

The GPT Service API is a Node.js-based application that provides interaction with OpenAI's powerful GPT model. This API is built on top of Express.js framework and leverages the OpenAI API client to communicate with the GPT model. It provides two main endpoints: a POST `/gpt` endpoint for processing and retrieving responses based on provided prompts, and a GET `/status` endpoint for checking the status of the service.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [Deployment](#deployment)

## Overview

The main components of this API are:

1. **Express Server**: This is the main server that listens to incoming requests.
2. **Service Function**: A service function is defined that interacts with the GPT model. This function, `functionToCall()`, handles the communication with the GPT model and includes error handling and retries.
3. **OpenAI API Client**: This is the client that communicates directly with the OpenAI's GPT model. It sends the prompts and retrieves the generated responses.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- An API key from OpenAI

### Installation

1. Clone the repo
```
git clone https://github.com/deepwizards/gpt-service.git
```

2. Install NPM packages

```npm install```

3. Ensure your environment (.env, bash_profile, docker-compose env etc...) has your OpenAI API key set
```
OPENAI_API_KEY=your_api_key
```

## Usage

To start the server, use the following command:
```
npm start
```

After starting the server, you can send a POST request to `http://localhost:3001/gpt` with a JSON body containing the "prompt" key to get a response from the GPT model.

For example:
```
{
    "prompt": "Translate the following English text to French: 'Hello, how are you?'"
}
```

The response will be the output from the GPT model based on your prompt.

## API Reference

`POST /gpt`

- Parameters: `prompt` in the body (required)
- Response: JSON object containing the status ('completed' for successful requests) and result from the GPT model.

`GET /status`

- Response: JSON object indicating the status of the API ('OK' means the API is running properly).

## Error Handling

Errors from the GPT model or the Express server are caught and returned as a JSON object with the status set as 'error' and a relevant error message. If the GPT model returns a rate limit error (429), the service function will attempt to retry the request up to 5 times with a 1-second delay between each attempt.

## Deployment

This section will guide you on how to deploy this on a live system.

To prepare your application for deployment, use the Dockerfile to add to your cluster.



