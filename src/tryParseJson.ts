import { Json } from './types';

export const tryParseJson = (input: string): Json | undefined => {
  try {
    return JSON.parse(input) as Json;
  } catch {
    return undefined;
  }
};
