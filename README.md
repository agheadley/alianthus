# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open


http://localhost:5173/
```

Connecting to vercel

npm i -g @vercel@latest

vercel link

vercel env pull .env.development.local

```
supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
```



