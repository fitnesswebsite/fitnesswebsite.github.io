function showsmooth(){
     var smoothie =['Strawberry', 'Carrot', 'Raspberry','Blueberry','Banana','Ginger', 'Peach', 'Apple', 'Watermelon', 'Melon', 'Kale', 'Kiwi', 'Coconut',
     'Mango', 'Pineapple', 'Papaya', 'Dragon Fruit']
     var random1 = smoothie[Math.floor(Math.random() *smoothie.length)]
     document.getElementById('smoothies').innerHTML = random1;
     var random2 = smoothie[Math.floor(Math.random() *smoothie.length)]
     document.getElementById('smoothies2').innerHTML = random2;
     var random3 = smoothie[Math.floor(Math.random() *smoothie.length)]
     document.getElementById('smoothies3').innerHTML = random3;
}
