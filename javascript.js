
let count = 1;
const add = document.getElementById("add-tab");
add.addEventListener("click", function() {
    count++;
    console.log(count);

    const tab = document.querySelector("#tab");
    const cloneTab = tab.cloneNode(true);

    for (let i = 0; i <= count; i++) {
        let tabCount = "tab" + [i];
        cloneTab.id = tabCount;
        tab.after(cloneTab); 
    }
});


