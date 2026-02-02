import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import matter from "gray-matter";
import "dotenv/config";
import fs from "fs/promises";
import { getLesson, getLessons } from "../data/lesson.js";
import getPrompt from "./getPrompt.js";
import assert from "assert";
import path from "path";
import { z } from "zod";

const args = process.argv.slice(2);
const force = args.includes("--force");

const configBuffer = await fs.readFile(
  path.join(process.cwd(), "./course.json")
);
const config = JSON.parse(configBuffer);

// Determine which provider to use based on available API keys
// Defaults to Anthropic (Claude), falls back to OpenAI
const useAnthropic = !!process.env.ANTHROPIC_API_KEY;
const useOpenAI = !!process.env.OPENAI_API_KEY;

assert(
  useAnthropic || useOpenAI,
  "Either ANTHROPIC_API_KEY or OPENAI_API_KEY must be set. Pass it via the environment or define it in a .env file"
);

// Configure the model - prefer Anthropic if available
const model = useAnthropic
  ? anthropic("claude-sonnet-4-20250514")
  : openai("gpt-5-mini");

if (useAnthropic) {
  console.log("🤖 Using Claude (Anthropic)");
} else {
  console.log("🤖 Using GPT-5 mini (OpenAI)");
}

async function exec() {
  const list = await getLessons();

  for (let section of list) {
    for (let lesson of section.lessons) {
      await summarize(section, lesson);
    }
  }
}

async function summarize(section, lesson) {
  const rendered = await getLesson(section.slug, lesson.slug);
  const file = await fs.readFile(lesson.path);
  const { data, content } = matter(file.toString());

  if (data.description && !force) {
    console.log(`⏺️ ${lesson.fullSlug}`);
  } else {
    try {
      const { object } = await generateObject({
        model,
        system: getPrompt(config),
        prompt: `The markdown content is: \n\n\n${rendered.markdown}`,
        schema: z.object({
          seoDescription: z.string(),
          seoKeywords: z.array(z.string()),
        }),
      });

      const parsed = {
        description: object.seoDescription,
        keywords: object.seoKeywords,
      };

      const newData = Object.assign({}, data, parsed);
      const contentToWrite = matter.stringify({ content, data: newData });

      await fs.writeFile(lesson.path, contentToWrite);
      console.log(`✅ ${lesson.fullSlug}`);
    } catch (e) {
      console.error(`❌ Error on ${lesson.path}, skipping`, e);
    }
  }
}

exec();
