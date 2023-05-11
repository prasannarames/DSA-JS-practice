
function pyramidPattern (n){

for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(' ')
    }
    // printing stars
    for (let k = 0; k < 2 * i - 1; k++) {
      process.stdout.write('*')
    }
    console.log();
  }

}

pyramidPattern(4)