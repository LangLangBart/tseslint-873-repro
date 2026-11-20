# `no-unsafe-class-instance-assignment` false positive with intersection-based mixin bases

- rule: <https://typescript-eslint.io/rules/no-unsafe-class-instance-assignment>
- introduced in `8.73.0` by <https://github.com/typescript-eslint/typescript-eslint/pull/12907>
- report: <https://github.com/typescript-eslint/typescript-eslint/issues/13214>

## Reproducer with real use case

```bash
npm install
npx eslint
# ...

fixture.ts
  7:63  error  This value is used where an instance of class `Node<Node>` is expected, but was not created by its constructor  ts/no-unsafe-class-instance-assignment
```
