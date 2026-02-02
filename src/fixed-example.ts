import {DurationFormat} from '@formatjs/intl-durationformat'

// Using class directly doesn't throw any Type errors.
const formatter = new DurationFormat('en', {
    style: 'long',
    hours: 'numeric',
    minutes: 'numeric',
    seconds: 'numeric',
})

const output = formatter.format({hours: 3, minutes: 25, seconds: 7})
console.log(output);
