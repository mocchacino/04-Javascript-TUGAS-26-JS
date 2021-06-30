var deretAngka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

for(var x in deretAngka){
    if(isFinite(deretAngka[x])){
        console.log("Angka ", deretAngka[x], "NOT Infinity")
    }else console.log("Angka ", deretAngka[x], "is Infinity")
}
