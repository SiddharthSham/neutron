export function Idly(options = {
    timeout: 1000,
    mode: 'fifo',
    listen: false
}) {
    this.idleQ = []
    this.currentTask = null
    this.taskCounter = 0
    this.timeout = options.timeout
    this.mode = options.mode
    this.listen = options.listen
    this.currentCallback = null

    window.requestIdleCallback =
        window.requestIdleCallback ||
        function (cb) {
            let start = Date.now();
            return setTimeout(() => {
                cb({
                    didTimeout: false,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - start));
                    }
                });
            }, 1);
        }

    window.cancelIdleCallback =
        window.cancelIdleCallback ||
        function (id) {
            clearTimeout(id);
        }

    this.schedule = task => {
        this.idleQ.push(task)
        this.taskCounter += 1
    }

    this.clear = () => {
        this.idleQ = []
        this.taskCounter = 0
    }

    this.run = () => {
        this.currentCallback = window.requestIdleCallback(this.execute, {
            timeout: this.timeout
        })
    }

    this.execute = deadline => {
        while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && this.taskCounter > 0) {
            if (this.mode == 'fifo') {
                this.currentTask = this.idleQ.shift()
            } else if (this.mode == 'lifo') {
                this.currentTask = this.idleQ.pop()
            }
            try {
                this.currentTask.task.apply(null, this.currentTask.args)
                this.taskCounter -= 1
            } catch (err) {
                console.log(`[IDLY]: A scheduled function caused an error!`)
                console.log(err)
            }
        }
        if (this.listen) this.run()
        if (this.taskCounter > 0) this.run()
    }

    this.cancel = () => {
        if (this.currentCallback == null) return
        window.cancelIdleCallback(this.currentCallback)
    }
}