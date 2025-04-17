# mysite

## roadmap

- [ ] sexs
- [ ] content

### breakdown

- ~~minimal~~ nothingal homepage
- in-place transitions/hrefs/navigation
- pages:
  - hall of fame (certs)
  - experience (stalking me🙄)


## CI/CD

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun test:unit
```

### Run End-to-End Tests with [Nightwatch](https://nightwatchjs.org/)

```sh
# When using CI, the project must be built first.
bun run build

# Runs the end-to-end tests
bun test:e2e
# Runs the tests only on Chrome
bun test:e2e --env chrome
# Runs the tests of a specific file
bun test:e2e tests/e2e/example.ts
# Runs the tests in debug mode
bun test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
