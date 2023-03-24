### git commit 提交规范 ###

- feat: 新功能（feature）。
- fix: 修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG。
- docs: 文档（documentation）。
- style: 格式（不影响代码运行的变动）。
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）。
- perf: 优化相关，比如提升性能、体验。
- test: 增加测试。
- chore: 构建过程或辅助工具的变动。
- revert: 回滚到上一个版本。

### github pages 部署发布 ###

```
.umirc.ts

export default defineConfig({
  title: 'react-umi',
  outputPath: 'build',
  publicPath: 'https://whjin.github.io/react-umi/',
  history: { type: 'hash' },
});
```

```
package.json

git i -D gh-pages

"scripts": {
  "deploy": "gh-pages -d build",
  "homepage": "./"
},
```