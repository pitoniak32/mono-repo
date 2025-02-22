# nest-lib

***WARNING: These libraries are in a different folder for a specific reason. They are using `@nestjs/*` packages which are stateful and cannot have multiple instances of them when running the code (pnpm link / workspaces...)***

### These packages cannot use `pnpm link`, `"workspace:*"`
- nest-adding-module


## Workaround (Using Verdaccio)

publish the nest-lib packages to local npm registry (***remove `--dry-run` to actually publish***)
```
pnpm publish --filter "./nest-lib/*" --no-git-checks --registry http://localhost:4873 --dry-run
```