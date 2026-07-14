set shell := ["zsh", "-cu"]

default:
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
