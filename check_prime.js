function check_prime(user_number) {
    isPrime = true
    if (user_number < 2) {
        return false
        for (let i = 2; i <= Math.ceil(Math.sqrt(user_number)); i++) {
            if (user_number % i == 0) {
                isPrime = false
                break
            }
        }
    }
    return isPrime
}
user_number = 13
if (check_prime(user_number))
    console.log('${user_number} is a prime number')
else
    console.log(user_number, 'is a prime number')