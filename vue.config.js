module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/malefiz-vue-quasar/'
        : '/',
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
        },
        iconPaths: {
            favicon16: "img/icons/favicon-16x16.png",
            favicon32: "img/icons/favicon-32x32.png",
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
}
