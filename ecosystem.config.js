module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "run start",
      cwd: "/home/ubuntu/er-backend",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
