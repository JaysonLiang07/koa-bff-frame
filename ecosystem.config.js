module.exports = {
  apps: [
    {
      name: 'koa-bff',
      script: './app.ts',
      instances: 'max',
      exec_mode: 'cluster',
      interpreter: 'node',
      interpreter_args: '-r ts-node/register',  // 关键修改
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
      error_file: './logs/yd-app-error.log',
      out_file: './logs/yd-app-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};