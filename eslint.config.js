import tseslint from 'typescript-eslint'

export default [{
  files: ['fixture.ts'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: { projectService: true }
  },
  plugins: { ts: tseslint.plugin },
  rules: { 'ts/no-unsafe-class-instance-assignment': 'error' }
}]
