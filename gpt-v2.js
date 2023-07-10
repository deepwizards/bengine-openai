const { Configuration, OpenAIApi } = require('openai');

class OpenAIApiService {
  constructor(apiKey, model, temperature = 0.7, topP = 1, frequencyPenalty = 0, presencePenalty = 0) {
    this.configuration = new Configuration({ apiKey });
    this.openai = new OpenAIApi(this.configuration);
    this.model = model;
    this.temperature = temperature;
    this.topP = topP;
    this.frequencyPenalty = frequencyPenalty;
    this.presencePenalty = presencePenalty;
    this.modelCosts = {
      'gpt-3.5-turbo': { '4K': { input: 0.0015, output: 0.002 }, '16K': { input: 0.003, output: 0.004 } },
      'gpt-4': { '8K': { input: 0.03, output: 0.06 }, '32K': { input: 0.06, output: 0.12 } },
    };
  }

  async getGptResponse(prompt, contextSize) {
    if (!prompt) {
      throw new Error("Prompt argument required");
    }
    if (!this.modelCosts[this.model][contextSize]) {
      throw new Error(`Unsupported context size for model ${this.model}: ${contextSize}`);
    }

    console.log('GPT API call');

    const response = await this.openai.createChatCompletion({
      model: this.model,
      messages: [{role: "user", content: prompt}],
      temperature: this.temperature,
      top_p: this.topP,
      frequency_penalty: this.frequencyPenalty,
      presence_penalty: this.presencePenalty
    });

    console.log('GPT API call success');
    const { choices, usage } = response.data;

    return {
      message: choices[0].message.content,
      tokens: usage.total_tokens,
      cost: this.calculateCost(usage, contextSize),
    };
  }

  calculateCost(usage, contextSize) {
    const inputTokens = usage.prompt_tokens;
    const outputTokens = usage.completion_tokens;
    const costPerToken = this.modelCosts[this.model][contextSize];

    // Calculate cost as per token. Multiply by tokens and divide by 1000 as the cost is per 1k tokens.
    const inputCost = costPerToken.input * inputTokens / 1000;
    const outputCost = costPerToken.output * outputTokens / 1000;

    return inputCost + outputCost;
  }
}

exports.OpenAIApiService = OpenAIApiService;

// Usage
// const { OpenAIApiService } = require('./openai-api-service');

// const openaiService = new OpenAIApiService(process.env.OPENAI_API_KEY, "gpt-3.5-turbo");

// (async () => {
//   try {
//     const response = await openaiService.getGptResponse('Hello, how are you?', '4K');
//     console.log('GPT API call response: ', response);
//   } catch (error) {
//     console.error('Error: ', error);
//   }
// })();
