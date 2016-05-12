require.config({
    baseUrl: "lib",
    urlArgs: "v=1.0",
    paths: {
        jquery:'http://code.jquery.com/jquery-1.10.2',
        iscroll:'iscroll',
        app:'app'
    }
});
requirejs(['app/pull']);