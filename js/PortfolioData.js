

const data = [
    {
        img: "./portImg/creative.png",
        anchor: "https://muhaiminultasin.github.io/creative4U/"
    },
    {
        img: "./portImg/krikia.png",
        anchor: "https://muhaiminultasin.github.io/bs-second-assignment/"
    }
];

let portfolioContainer = document.querySelector("#portfolioContainer");

let dataGenerate = () =>  {
    return portfolioContainer.innerHTML = data.map((x) => {
        
        return `<a href="${x.anchor}" target="_blank" class="w-[350px] rounded-lg overflow-hidden "><img src="${x.img}" alt="" class="object-fit"></a>`
    });
};

dataGenerate(data); 