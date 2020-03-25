$(document).ready(() => {
	$('body').flurry();
    setTimeout(() => {
        
    })
    $("#skill meter").each(function(){
    })
})

// Google Analytic
$.ajax({
    url: 'https://www.googletagmanager.com/gtag/js?id=UA-87019455-2',
    dataType: 'script',
    success: function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-87019455-2');
    }
});
