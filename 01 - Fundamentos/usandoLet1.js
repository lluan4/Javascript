let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
    {
        let numero = 3
        console.log('dentro do dentro =', numero)
    }
}
console.log('fora =', numero)