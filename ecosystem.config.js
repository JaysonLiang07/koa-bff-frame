module.exports = {
  apps: [
    {
      name: 'koa-bff',
      script: './app.ts',
      instances: 'max',
      exec_mode: 'cluster',
      interpreter: 'node',
      interpreter_args: '-r ts-node/register',
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development',
        TS_NODE_PROJECT: './tsconfig.json',
      },
      env_production: {
        NODE_ENV: 'production',
        TS_NODE_PROJECT: './tsconfig.json',
      },
      error_file: './logs/koa-bff-error.log',    // 修改文件名匹配app名
      out_file: './logs/koa-bff-out.log',        // 修改文件名匹配app名
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};