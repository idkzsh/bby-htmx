export function getEnv(key: string): string | undefined {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key];
    }
    if (import.meta.env && (import.meta.env as any)[key]) {
      return (import.meta.env as any)[key];
    }
    return undefined;
  }