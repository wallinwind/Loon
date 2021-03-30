[MITM]
*.smzdm.com

[Script]
http-request ^https:\/\/www\.smzdm\.com\/?.? script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/smzdm/smzdm.cookie.js
cron "10 0 0 * * *" tag=什么值得买签到, script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/smzdm/smzdm.js