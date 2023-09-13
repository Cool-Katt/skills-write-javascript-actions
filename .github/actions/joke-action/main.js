import { getJoke } from './joke.js';
import core from '@actions/core';

const run = async () => {
    const joke = await getJoke();
    console.log(joke);
    core.setOutput('joke-output', joke);
};

run();