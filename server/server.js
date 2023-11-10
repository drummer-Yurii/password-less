const express = require('express');
const stytch = require('stytch');
const app = express()
require('dotenv').config()

//Stytch setup
const client = new stytch.Client({
    project_id: process.env.STYTCH_PID,
    secret: process.env.STYTCH_SECRET,
    env: process.env.STYTCH_ENV === "test"
        ? stytch.envs.test
        : stytch.envs.live
})