'use strict'
const HappyPack = require('happypack');
// 构造出共享进程池，进程池中包含5个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });

module.exports = {
    HappyPack: (id, loaders) => new HappyPack({
        id,
        loaders,
        //是否允许 HappyPack 输出日志
        verbose: false,
        // 使用共享进程池中的子进程去处理任务
        threadPool: happyThreadPool,
    })
}
