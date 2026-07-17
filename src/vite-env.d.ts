/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  readonly VITE_GIT_COMMIT_SHA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
