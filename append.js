function callFinderPrint(){
    Fingerprint2.get(function (components) {
        var hash = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
        document.querySelectorAll('form').forEach(function(form) {
            let element = document.createElement('input');
            element.type = 'hidden';
            element.name = 'fingerprint';
            element.value = hash;
            form.append(element);
        });
    });
}

if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        callFinderPrint();
    })
} else {
    setTimeout(function () {
        callFinderPrint();
    }, 500)
}