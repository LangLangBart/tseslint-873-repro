import { Node, Project } from 'ts-morph'

const sourceFile = new Project({ useInMemoryFileSystem: true })
  .createSourceFile('a.ts', 'const x = 1\nfunction foo() {}\n')

for (const statement of sourceFile.getStatements()) {
  if (statement instanceof Node && Node.isFunctionDeclaration(statement)) { // False positive
    console.log(statement.getName())
  }
}
