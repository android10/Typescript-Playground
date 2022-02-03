## Code Katas

Code Kata is an attempt to bring this element of practice to software development. A kata is an exercise in karate where you repeat a form many, many times, making little improvements in each. The intent behind code kata is similar. Each is a short exercise (perhaps 30 minutes to an hour long) that we have to solve. 

### Install pnpm and vite 

 - `npm install pnpm`
 - `pnpm install vite`

## Create a Project for a solution

 - `pnpm create vite project-name -- --template vanilla-ts`
 - `project-name`
 - `pnpm install`
 - `pnpm run dev`

## Adding test support

The idea is to solve each exercise using TDD (if possible), but in any case, tests are required in order to validate that our logic is behaving as intended. 

 - **Recommended Framework:** [Vitest](https://vitest.dev/)
 - **Example:** [hello-world-ts](../hello-world-ts)