function generate() {

    let input = document.getElementById("inputArray").value.trim();
    document.getElementById("error").innerHTML = "";
    // validation regex
    let regex = /^[0-9]+(,[0-9]+)*$/;

    if (!regex.test(input)) {
        document.getElementById("error").innerHTML =
            "Invalid input. Enter numbers separated by comma and values must be >= 0. E.g. 3,1,3";
        document.getElementById("result").innerHTML = ""
        document.getElementById("grid").innerHTML = ""
        return;
    }

    let arr = input.split(",").map(Number);

    let n = arr.length;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = arr[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }

    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    let water = new Array(n).fill(0);
    let total = 0;

    for (let i = 0; i < n; i++) {
        water[i] = Math.min(leftMax[i], rightMax[i]) - arr[i];
        if (water[i] > 0) {
            total += water[i];
        }
    }

    document.getElementById("result").innerHTML = "Output : " + total + " Units";

    drawGrid(arr, water);
}


function drawGrid(blocks, water) {

   let heights = blocks.map((b, i) => b + water[i]);
let maxHeight = Math.max(...heights);

    let grid = "<table>";

    for (let h = maxHeight; h > 0; h--) {

        grid += "<tr>";

        for (let i = 0; i < blocks.length; i++) {

            if (blocks[i] >= h) {
                grid += "<td class='block'></td>";
            }
            else if (blocks[i] + water[i] >= h) {
                grid += "<td class='water'></td>";
            }
            else {
                grid += "<td></td>";
            }

        }

        grid += "</tr>";
    }

    grid += "</table>";

    document.getElementById("grid").innerHTML = grid;

}

function cleargrid() {
    document.getElementById("result").innerHTML = ""
    document.getElementById("grid").innerHTML = ""
    document.getElementById("error").innerHTML = ""
    document.getElementById("inputArray").value = ""
}