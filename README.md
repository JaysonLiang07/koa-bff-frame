# YD-AI-BFF

🚀 基于 Koa.js + TypeScript 构建的 BFF（Backend For Frontend）项目

## 📋 项目简介

本项目是一个现代化的 BFF 架构实现，采用 Koa.js 作为核心框架，结合 TypeScript 提供类型安全，使用依赖注入模式构建可维护的企业级应用。

### 什么是 BFF？

BFF（Backend For Frontend）是一种架构模式，专门为前端应用提供定制化的后端服务：
- 🎯 **数据聚合**：整合多个微服务的数据，减少前端请求次数
- 🔄 **数据适配**：将后端数据格式转换为前端友好的结构
- 🛡️ **业务逻辑封装**：将复杂的业务逻辑在服务端处理
- 📱 **多端适配**：为不同终端（Web、移动端）提供差异化接口

## 🛠️ 技术栈

### 核心框架
- **[Koa.js](https://koajs.com/)** - 轻量级 Node.js Web 框架
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的超集，提供静态类型检查

### 架构设计
- **[Awilix](https://github.com/jeffijoe/awilix)** - 依赖注入容器，实现控制反转
- **[awilix-koa](https://github.com/jeffijoe/awilix-koa)** - Koa 的依赖注入集成

### 开发工具
- **[ts-node-dev](https://github.com/wclr/ts-node-dev)** - TypeScript 开发服务器，支持热重载
- **[koa-swig](https://github.com/koa-modules/swig)** - 模板引擎
- **[log4js](https://github.com/log4js-node/log4js-node)** - 日志管理

### 生产部署
- **[PM2](https://pm2.keymetrics.io/)** - Node.js 进程管理器

## 🏗️ 项目架构