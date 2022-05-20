# Metronome

## This project uses [getsongbpm](https://getsongbpm.com/) free APIs

It contains:

- [X] React
- [X] Typescript
- [X] Storybook
- [X] Unit testing
- [X] RTK query
- [X] Data cache
- [X] Vite
- [X] pnpm
- [X] environment variables
- [X] custom hooks
- [X] path aliases
- [X] JSdoc documentation
- [X] Msw mock calls for testing

## STEPS TO RUN

1. Clone project
2. On terminal, execute `pnpm install`
3. Register on [getsongbpm](https://getsongbpm.com/api) webpage and create an API key
4. Create a `.env` file on the root folder containing the following:

    ```text
    VITE_BPM_WEB_API_KEY={{THE ACCESS TOKEN FOUND IN THE getsongbpm WEBPAGE AFTER REGISTERING}}
    VITE_BPM_WEB_BASE_URL=https://api.getsongbpm.com
    ```

5. Execute `pnpm run dev`
6. Execute `pnpm run test` to run unit testing

##  Stack

- React v18
- RTK Query
- Typescript
- Storybook
- pnpm
- Vite
- JSDoc
- Jest
- Testing library
- Styled components
- MSW
*Developed using node v18*

***enjoy!***

**Author**: Francisco Castillo González

```text
sp-a-test
├─ .storybook
│  ├─ main.js
│  ├─ manager-head.html
│  ├─ preview-head.html
│  └─ preview.js
├─ config
│  └─ tests
│     ├─ file-transformer.ts
│     ├─ jest-setup.ts
│     └─ server.ts
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ bpm.json
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.stories.tsx
│  │  │  ├─ Button.test.tsx
│  │  │  ├─ Button.tsx
│  │  │  ├─ RoundedButton.stories.tsx
│  │  │  ├─ RoundedButton.test.tsx
│  │  │  ├─ RoundedButton.tsx
│  │  │  └─ index.ts
│  │  ├─ Layout
│  │  │  ├─ Layout.stories.tsx
│  │  │  ├─ Layout.test.tsx
│  │  │  ├─ Layout.tsx
│  │  │  └─ index.ts
│  │  ├─ Loader
│  │  │  ├─ RippleLoader.stories.tsx
│  │  │  ├─ RippleLoader.test.tsx
│  │  │  ├─ RippleLoader.tsx
│  │  │  └─ index.ts
│  │  ├─ Text
│  │  │  ├─ Text.stories.tsx
│  │  │  ├─ Text.test.tsx
│  │  │  ├─ Text.tsx
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ useClickBpm.test.tsx
│  │  └─ useClickBpm.tsx
│  ├─ main.tsx
│  ├─ mocks
│  │  ├─ 128bpm.json
│  │  ├─ 72bpm.json
│  │  └─ handlers.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ services
│  │     ├─ ApiBpmSlice.test.tsx
│  │     └─ ApiBpmSlice.ts
│  ├─ style
│  │  └─ index.ts
│  ├─ types
│  │  └─ index.ts
│  ├─ utils
│  │  ├─ bpmCalculator.test.tsx
│  │  ├─ bpmCalculator.ts
│  │  ├─ getSongsWithBpm.test.tsx
│  │  └─ getSongsWithBpm.ts
│  └─ vite-env.d.ts
├─ .env
├─ .gitignore
├─ babel.config.js
├─ index.html
├─ jest.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```
