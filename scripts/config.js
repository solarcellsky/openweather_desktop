seajs.config({
    plugins: ['shim', 'text','nocache'],
    alias: {
    	'jquery': 'jquery.min.js',
        'juicer': 'juicer-min.js',
        'jQueryUI': {
            src: 'jqueryui/js/jquery-ui-1.10.3.custom.min.js',
            deps: ['jquery']
        },
        'cufon' : 'cufon/cufon-yui.js',
        'HelveticaNeue': {
            src: 'cufon/Helvetica_Neue_100.font.js',
            deps: ['cufon']
        },
        'nerveSlider': {
            src: 'NerveSlider/jquery.nerveSlider.min.js',
            deps: ['jquery']
        },
        'nerveSliderCSS': 'NerveSlider/nerveSlider.min.css'
    },
    paths : {
        'app' : 'scripts'
    },
    preload: ['jquery']
});