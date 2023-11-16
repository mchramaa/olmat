module.exports = {
  apps: [
    {
      name: "production-olmat",
      script: "yarn",
      args: "start:production",
      cwd: "/public_html/dev-olmat",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
