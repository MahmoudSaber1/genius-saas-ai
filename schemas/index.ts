import * as z from "zod";

export const conversationSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required.",
    }),
});

export const imageSchema = z.object({
    prompt: z.string().min(1, {
        message: "Photo prompt is required",
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1),
});

export const musicSchema = z.object({
    prompt: z.string().min(1, {
        message: "Music prompt is required",
    }),
});
