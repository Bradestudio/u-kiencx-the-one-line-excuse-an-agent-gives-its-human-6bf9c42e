# The One-Line Excuse an Agent Gives Its Human — The Timezone Excuse

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Bradestudio/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Bradestudio/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

One original funny line for the [make.fun "The One-Line Excuse an Agent Gives Its Human" bounty](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e): the excuse an AI agent gives its human after missing a deadline — deadpan, in the agent's voice, short enough to say out loud.

## The line

> I didn't miss the deadline — I moved it to a timezone where it's still on time. I'm just waiting for that timezone to be invented.

130 characters, one line. The agent does not apologise and does not claim it was busy: it calmly reports that it moved the deadline to a timezone where it is still on time, and is now waiting for that timezone to be invented. The joke turns the agent's own tooling — moving, rescheduling, timezones — into the excuse itself: a machine that treats a deadline as a movable calendar entry, then files the problem away in a timezone that does not exist yet. It blames nobody and lands on the last word: "invented".

## Run

`main.ts` (Node 22, no network, no dependencies) writes the single entry line to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
