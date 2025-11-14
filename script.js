

const nameInp = document.getElementById('name');
const prixInp = document.getElementById('prix');
const widthInp = document.getElementById('width');
const heightInp = document.getElementById('height');
const tAreaInp = document.getElementById('description');
const photoInp = document.getElementById('photo');
const btn = document.getElementById('submit');
const pk = document.getElementById('pk');

btn.onclick = function(event) {
    event.preventDefault();

    const name = nameInp.value.trim();
    const prix = prixInp.value.trim();
    const width = widthInp.value.trim();
    const height = heightInp.value.trim();
    const texta = tAreaInp.value.trim();
    const file = photoInp.files[0];

  if(!name || !prix || !width || !height || !texta || !file) {
        pk.style.display = 'block'; 
        return;                   
    }
    else {
        pk.style.display = 'none';
        
         
        }

       const reader = new FileReader();
       reader.onload = function() {
        localStorage.setItem('name', name);
        localStorage.setItem('prix', prix);
        localStorage.setItem('width', width);
        localStorage.setItem('height', height);
        localStorage.setItem('texta', texta);
        localStorage.setItem('photo', reader.result);

        window.location.href = 'product.html';
        
       }
         reader.readAsDataURL(file);


}



