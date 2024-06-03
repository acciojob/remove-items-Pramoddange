//your JS code here. If required.
  var colorSelect = document.getElementById('colorSelect');
        var button = document.querySelector('input[type="button"]');
        button.addEventListener("click", () => {
            if (colorSelect.selectedIndex !== -1) {
                colorSelect.remove(colorSelect.selectedIndex);
            }
        });

