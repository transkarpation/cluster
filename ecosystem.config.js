module.exports = {
    apps: [
      {
        name: 'Express App',
        script: 'server.js',
        instances: 2,
        autorestart: true,
        exec_mode: "cluster",
        watch: true,
        max_memory_restart: '1G'
      }
    ]
};