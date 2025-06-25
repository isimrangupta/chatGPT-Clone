const api = "AIzaSyB2z6WoMRj3XgbHOEdR0qC5N0NeBxrTXMg";

import {
  GoogleGenerativeAI,
   HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { RiMoneyEuroBoxLine } from "react-icons/ri";


const genAI = new GoogleGenerativeAI(api);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [   
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text()
}

export  default run;