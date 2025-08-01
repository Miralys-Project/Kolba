# 📝 Commit Message Convention

This project follows a structured commit message convention based on the **Angular commit style**, extended with additional commit types specific to our workflow.

Using consistent commit messages improves:
- Changelogs and release notes automation
- Project maintainability
- Collaboration across contributors
- The ability to parse changes for analytics or tooling

All commits must follow the format and rules defined in this document.  
**Commit messages not respecting this format may be rejected by CI.**

---

## 📐 Commit Format

```bash
<type>(optional scope): <short, imperative summary>

<optional body>

<optional footer>
```

## 🧪 Example

```bash
feat(parser): add support for nested IF statements

fix(cli): throw error on missing --target flag

docs: update README with CLI usage examples

style: format code with Prettier

refactor(core): move AST builder to separate module

perf(ts): improve loop unrolling performance

test(rust): add unit test for string generator
```

```bash
feat(cli): add support for multiple output formats

Allows the user to select `js`, `ts`, `rust`, or `csharp` backends
via a new CLI flag `--target`. This makes the CLI more flexible
and helps new users get started quickly.

BREAKING CHANGE: The CLI no longer defaults to TypeScript output.

Closes #42

```

> If Breaking Changes you need to add this on the footer. For example:

```bash
BREAKING CHANGE: renames `--output-format` to `--target`
```

## 📝 Full Message Format
A commit message consists of a header, body and footer. The header has a type, scope and subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```


The header is mandatory and the scope of the header is optional. If the commit contains Breaking Changes, a ! can be added before the : as an indicator.