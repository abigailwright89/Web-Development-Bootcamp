        function bulbOn() {
            let bulb = document.getElementById('bulb');

            if (bulb.src.match('bulb')) {
                bulb.src = 'images/on.png';
            } else {
                bulb.src = 'images/off.png';
            }
        }