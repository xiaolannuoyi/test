const request = require('request');
function test() {
    const options = {
        url: 'http://www.baidu.com',

    };
    request(options, (err, res, body) => {
        try {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        } catch (error) {
            console.log('catch', error)
        }
    })
}
test()