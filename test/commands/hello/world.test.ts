import {expect, test} from '@oclif/test'

describe('hello:world', () => {
  test
  .stdout()
  .command(['hello:world'])
  .it('runs hello:world', ctx => {
    expect(ctx.stdout).to.contain('hello world from ./src/hello.ts!')
  })

  test
  .stdout()
  .command(['hello:world', '--name', 'jeff'])
  .it('runs hello:world --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff from ./src/hello.ts!')
  })
})
