# protobuf 在 js 中的实际使用

## 使用

其实在[protobuf](https://github.com/google/protobuf/tree/master/js)中已经讲的非常清楚了，下面我再简明扼要的介绍一下。

#### 依赖

>To use Protocol Buffers with JavaScript, you need two main components:
The protobuf runtime library. You can install this with npm install google-protobuf, or use the files in this directory.
If npm is not being used, as of 3.3.0, the files needed are located in binary subdirectory; arith.js, constants.js, decoder.js, encoder.js, map.js, message.js, reader.js, utils.js, writer.js
The Protocol Compiler protoc. This translates .proto files into .js files. Thecompiler is not currently available via npm, but you can download a pre-built binary on GitHub (look for the protoc-*.zip files under Downloads).

- google-protobuf(npm 依赖)
- 协议编译器 protoc (见本项目中 protobuf-3.6.0-osx-x86_64/bin/protoc 或者 [github 下载](https://github.com/google/protobuf/releases))
- pre-built binary (见本项目中 protobuf-3.6.0 或者 [github 下载](https://github.com/google/protobuf/releases))

### 配置

- 进入到 pre-built binary 根目录执行以下命令

```bash
$ cd js
$ npm install
# 把 协议编译器 protoc 拷贝到../src目录下
$ npm test

# If your protoc is somewhere else than ../src/protoc, instead do this.
# But make sure your protoc is the same version as this (or compatible)!
$ PROTOC=/usr/local/bin/protoc npm test
```

## 示例

## 参考文档

[protobuf](https://github.com/google/protobuf/tree/master/js)
[介绍protobuf](https://www.ibm.com/developerworks/cn/linux/l-cn-gpb/index.html)