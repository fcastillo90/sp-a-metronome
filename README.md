# Metronome

## This project uses [getsongbpm](https://getsongbpm.com/) free APIs

###  *work in progress*

It contains:

- [X] React v18
- [X] Typescript
- [X] Vite
- [X] pnpm
- [X] RTK query
- [X] Data cache
- [X] environment variables
- [X] custom hooks
- [X] path aliases
- [X] basic test
- [X] JSdoc documentation

## STEPS TO RUN

1. Clone project
2. On terminal, execute `pnpm install`
3. Register on [getsongbpm](https://getsongbpm.com/api) webpage and create an API key
4. Create a `.env` file on the root folder containing the following:

    ```text
    VITE_BPM_WEB_API_KEY={{THE ACCESS TOKEN FOUND IN THE THEMOVIEDB WEBPAGE AFTER REGISTERING}}
    VITE_BPM_WEB_BASE_URL=https://api.getsongbpm.com
    ```

5. Execute `pnpm run dev`
6. Execute `pnpm run test` to run unit testing

***enjoy!***

**Author**: Francisco Castillo González
