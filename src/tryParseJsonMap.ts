import { JsonMap } from './types';
import { tryParseJson } from './tryParseJson';

export const tryParseJsonMap = (input: string): JsonMap | undefined => {
  const json = tryParseJson(input);
  if (typeof json === 'object' && !Array.isArray(json)) {
    return json ?? undefined;
  }
  return undefined;
};
