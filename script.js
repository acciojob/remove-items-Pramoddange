//your JS code here. If required.
  var colorSelect = document.getElementById('colorSelect');
        var button = document.querySelector('input[type="button"]');
        button.addEventListener("click", () => {
            if (colorSelect.selectedIndex !== -1) {
                colorSelect.remove(colorSelect.selectedIndex);
            }
        });

/*
colorSelect.addEventListener("click",(event)=>{
	 var selectedIndex = colorSelect.selectedIndex;
            
            // Check if a color is selected
            if (selectedIndex !== -1) {
                // Remove the selected option
                colorSelect.remove(selectedIndex);
            }
});

