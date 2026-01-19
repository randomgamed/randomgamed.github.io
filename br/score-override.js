const CUSTOM_WIN_SCORE = 10;
setInterval(function() {
    if (window.C3 && window.C3.compare) {
   
        const original = window.C3.compare;
        
   
        window.C3.compare = function(a, cmp, b) {
            if (cmp === 4 && b === 5) {
                console.log("Changing 5 to 10");
                b = CUSTOM_WIN_SCORE; 
            }
            return original(a, cmp, b);
        };
        
        console.log("score override active!");
    }
}, 100);
