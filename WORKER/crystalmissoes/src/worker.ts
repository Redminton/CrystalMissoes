/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Client as LibsqlClient, createClient } from "@libsql/client/web";

export interface Env {
  TURSO_URL?: string;
  TURSO_AUTH_TOKEN?: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const client = buildLibsqlClient(env);

    try {



      const res = await client.execute('SELECT * FROM elements');



      return new Response(JSON.stringify(res), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error executing SQL query:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500
      });
    }
  },
};

function buildLibsqlClient(env: Env): LibsqlClient {
  const url = env.TURSO_URL?.trim();
  if (url === undefined) {
    throw new Error("TURSO_URL env var is not defined");
  }

  const authToken = env.TURSO_AUTH_TOKEN?.trim();
  if (authToken == undefined) {
    throw new Error("TURSO_AUTH_TOKEN env var is not defined");
  }

  return createClient({ url, authToken });
}
