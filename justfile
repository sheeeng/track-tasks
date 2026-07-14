# Use zsh for recipe execution.
# `-o nounset` fails fast on unset variables.
# `-c` reads the recipe command string.
set shell := ["zsh", "-o", "nounset", "-c"]

default:
  # List available recipes.
  @just --list

install:
  npm install

dev:
  npm run dev

build:
  npm run build

preview:
  npm run preview

lint:
  npm run lint

clean:
  npm run clean
