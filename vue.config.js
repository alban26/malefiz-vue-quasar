module.exports = {
    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: true
        }
    },
    transpileDependencies: [
        'quasar'
    ],
    pwa: {
        title: 'Malefiz',
        name: 'Malefiz',
        themeColor: '#fac559',
        msTileColor: '#000000',
        mobileWebAppCapable: 'yes',
        mobileWebAppCache:'yes',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppCache: 'yes',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            skipWaiting: true,
            clientsClaim: true
        },
        manifestOptions: {
            name: 'Malefiz',
            short_name: 'Malefiz',
            start_url: '.',
            display: 'fullscreen',
        }
    }
}
