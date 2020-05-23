module.exports = {
    transpileDependencies: ['vuetify'],
    pluginOptions: {
        s3Deploy: {
            awsProfile: 'default',
            region: 'us-west-1',
            bucket: 'rabbound',
            createBucket: true,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: false,
            gzip: true,
            uploadConcurrency: 5,
            pluginVersion: '4.0.0-rc3',
            enableCloudfront: false
        }
    }
}
