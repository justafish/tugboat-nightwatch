module.exports = {
  src_folders: ['test'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: process.env.CHROMEDRIVER_BIN,
    cli_args: [],
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'chrome',
	      chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless'],
          binary: process.env.CHROME_BIN,
        },
      }
    }
  }
};


