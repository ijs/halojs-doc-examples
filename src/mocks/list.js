module.exports = function () {
    const List = []
    for(let i = 0; i < 10; i++) {
        List.push({id: i, order_id: parseInt(Math.random() * 100000), name: `商品${i+1}`})
    }
    return {
        data: {
            list: List
        },
        status: 0
    }
}