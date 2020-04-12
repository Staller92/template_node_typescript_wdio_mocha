const timeout = process.env.DEBUG ? 99999999 : 30000;

exports.config = {
    runner: 'local',
    specs: [
        './test/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://shop.westerndigital.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [
        ['mochawesome', {
            outputDir: './reports'
        }]
    ],
    mochaOpts: {
        compilers: [
            'tsconfig-paths/register'
        ],
        ui: 'bdd',
        timeout: timeout
    },

    before: function (capabilities, specs) {
        require('ts-node').register({files: true});
        browser.maximizeWindow();
    },

    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },
}
