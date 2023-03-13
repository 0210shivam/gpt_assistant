const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
   organization: "org-T8Su9wEl3AA1mLKGvOjGDwAc",
   apiKey: "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",
});

export const openai = new OpenAIApi(configuration);
