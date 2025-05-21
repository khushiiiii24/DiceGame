const num = document.querySelectorAll(".num");
console.log(num);

const arr = [
    'dicephotos/dice_1.png',
    'dicephotos/dice_2.png',
    'dicephotos/dice_3.png',
    'dicephotos/dice_4.png',
    'dicephotos/dice_5.png',
    'dicephotos/dice_6.png'
];

num.addEventListener("click", () => {
    function randomize(arr) {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    const randomImage = randomize(arr);
    num.src = randomImage;  
});
