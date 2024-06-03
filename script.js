//your JS code here. If required.
 var colorSelect = document.getElementById('colorSelect');
  let button=document.getElementByTag('input')
button.addEventListener("click",()=>{
	var selectedIndex = colorSelect.selectedIndex;
	 if (selectedIndex !== -1) {
                // Remove the selected option
                colorSelect.remove(selectedIndex);
            }
})

/*
colorSelect.addEventListener("click",(event)=>{
	 var selectedIndex = colorSelect.selectedIndex;
            
            // Check if a color is selected
            if (selectedIndex !== -1) {
                // Remove the selected option
                colorSelect.remove(selectedIndex);
            }
});

