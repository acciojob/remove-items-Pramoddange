//your JS code here. If required.
 var colorSelect = document.getElementById('colorSelect');

colorSelect.addEventListener("click",(event)=>{
	 var selectedIndex = colorSelect.selectedIndex;
            
            // Check if a color is selected
            if (selectedIndex !== -1) {
                // Remove the selected option
                colorSelect.remove(selectedIndex);
            }
});

