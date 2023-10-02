export async function readInput(prompt?: string): Promise<string> {
  if (prompt != null) {
    await Bun.write(Bun.stdout, prompt);
  }
  for await (const line of console) {
    return line;
  }
  throw new Error();
}
