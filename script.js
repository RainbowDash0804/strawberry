const huntInputs = document.querySelectorAll('.checkbox-group input [type="checkbox"]');

huntInputs.forEach(inputElement => {
    inputElement.addEventListener('change',()=> {
        const parentRow = inputElement.parentElement;
        if (inputElement.checked){
            const badgeElement= document.createElement('div');
            badgeElement.className = 'achievement-badge';
            badgeElement.innerText= 'Secret Task Unlocked: "${inputElement.value}"';
            parentRow.appendChild(badgeElement);
        }else{ 
            const existingBadge = parentRow.querySelector('.achievement-badge');
            if(existingBadge){
                existingBadge.remove();
            }
        }
    });
});