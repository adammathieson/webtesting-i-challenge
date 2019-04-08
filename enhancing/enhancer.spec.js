const { repair, succeed, fail } = require('./enhancer.js');

it('should restore durability to 100', () => {
    expect(repair({
        name: 'Shield', 
        durability: 75, 
        enhancement: 5
    }))
        .toEqual({
            name: 'Shield', 
            durability: 100, 
            enhancement: 5
        })
}) 

it('should increment enhancement by 1 if less than 20', () => {
    expect(succeed({
        name: 'Shield',
        durability: 100,
        enhancement: 19
    }))
        .toEqual({
            name: 'Shield',
            durability: 100,
            enhancement: 20
        })
})

it('should decrement durability by 10 and decrement enhancement by 1 if enhancement greater than 16', () => {
    expect(fail({
        name: 'Shield',
        durability: 90,
        enhancement: 17
    }))
        .toEqual({
            name: 'Shield',
            durability: 80,
            enhancement: 16
        })
})

it('should decrement durability by 10 if enhancement greater than 14', () => {
    expect(fail({
        name: 'Shield',
        durability: 90,
        enhancement: 15
    }))
        .toEqual({
            name: 'Shield',
            durability: 80,
            enhancement: 15
        })
})

it('should decrement durability by 5 if enhancement less than 15', () => {
    expect(fail({
        name: 'Shield',
        durability: 90,
        enhancement: 14
    }))
        .toEqual({
            name: 'Shield',
            durability: 85,
            enhancement: 14
        })
})

