const inp = document.getElementById('file');

inp.onchange = (e) => {
    const file = e.target.files[0];
    heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 0.25
    }).then((img) => {
        const newImg = new Image();
        newImg.src = URL.createObjectURL(img);
        document.body.appendChild(newImg);
    });
}

console.log('you shouldn\'t be here');