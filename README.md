# crontab.training

We all know and love https://crontab.guru - great website to check what a `cron string` (eg. `1 */5 * * *`) does. It also has a human `readable expression` for the same.

What if, we build a training ground - where the human readable expression will be present, and we need to figure out the cron string? Think of it as practicing random cron questions!

## Scope for 1.0.0
Randomly generate `readable expressions` and corresponding `cron string` - user coming to the page will have an input box and the said `readable expression` visible. The user can have unlimited tries until the correct `cron string` is reached, with a history of tries stored (see design for clarity). We'll also store the entire history of user inputs (upto 100 attempts). Only the last 5 with a fading opacity will be visible while the user is still attempting in reverse attempted order (latest first).

Once user reaches the correct answer, upto 100 attempts will be visible in reverse attempted order (latest first).

User should also have to be able to choose light/dark/system theme.

### Tech stack
- Vite.js + React.js
- Tailwind (we will have to define basic osdc organization wide colors)

### Design
> This is NOT the final design, just a sketch of what the website offers.

full design: https://www.canva.com/design/DAFzKmKDXiI/jluHMY1vZar8ogJcflnzXw/view

![image](https://github.com/osdc/crontab.training/assets/24990564/fb82d6db-ad92-491c-8e60-4163791e8196)

