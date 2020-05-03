import {Stopwatch} from "ts-stopwatch"

const s = new Stopwatch()
s.start()
console.log(s.getStartTime())
s.stop()
console.log(s.getStartTime())
