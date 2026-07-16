# AGENTS

## Project Overview

Track Tasks is a React web application for tracking personal tasks.
It persists data using the Web Storage API's Local Storage and
optionally integrates with the Gemini AI API.

## Architecture

- `src/App.tsx` contains the main application component with the task
  list, task input form, and task management logic.
- `src/hooks/useTasks.ts` manages task state and persists tasks to
  Local Storage.
- `src/types.ts` defines the shared TypeScript interfaces.
- `src/main.tsx` mounts the React application.
- `index.html` is the Vite HTML template.
- `vite.config.ts` configures the Vite bundler, React plugin, and
  Tailwind CSS plugin.
- `justfile` wraps common `npm` commands for convenience.

## Technology Stack

- React 19 with TypeScript
- Tailwind CSS 4
- Vite 8 for bundling
- motion/react for animations
- lucide-react for icons
- @google/genai for Gemini AI integration

## Development Workflow

Run all commands from the repository root.

Install dependencies.

```shell
npm install
```

Start the development server.

```shell
npm run dev
```

Type-check without emitting files.

```shell
npm run lint
```

Build for production.

```shell
npm run build
```

Preview the production build.

```shell
npm run preview
```

Remove build artifacts.

```shell
npm run clean
```

## Writing Style

- Ensure adherence to Chicago Manual of Style by maintaining correct
  grammar and using proper punctuation in all comments and
  documentation.
- Follow Chicago Manual of Style capitalization conventions.
    - Use title case, or headline style, for headings, titles, and
      section names.
    - Use sentence case, or sentence style, for regular comments,
      descriptions, and explanatory text.
    - Always capitalize proper nouns regardless of context.
- Apply accurate grammar and proper punctuation throughout code
  documentation.
- For title case, apply these Chicago Manual of Style rules.
    - Always capitalize the first and last words.
    - Capitalize all nouns, pronouns, verbs, adjectives, and adverbs.
    - Lowercase articles such as a, an, the.
    - Lowercase coordinating conjunctions such as and, but, or, for,
      nor, so, yet.
    - Lowercase prepositions such as at, by, for, from, in, into, of,
      on, to, with, between, through.
    - Lowercase "to" in infinitives such as to run, to see, to build.
    - Exception: Capitalize prepositions when used adverbially or
      adjectivally, such as "Look Up" and "Turn Down," or in verb
      phrases.
    - Do not use normal dashes `-` or em dashes `—`.
    - Do not use parentheses `()` to phrase terms.
    - Do not use abbreviated or slang terms; use full terms. Example:
        - Do not use `can't`; use `cannot`.
        - Do not use `config`; use `configuration`.
        - Do not use `docs`; use `documents`.
        - Do not use `info`; use `information`.
- Use indicative or imperative verbs. Example:
    - Indicative: "This function installs the package.", "The script
      configures the settings.", "The process runs the command."
    - Imperative: "Install the package.", "Configure the settings.",
      "Run the command."
    - Prefer imperative for instructions and documentation.
    - Prefer indicative for comments that explain what code does.

## Tracking Tasks

Use [bd](https://github.com/steveyegge/beads) for tracking tasks.
