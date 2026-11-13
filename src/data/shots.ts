import type { ImageMetadata } from "astro";

import attack from "../assets/hanzi-rivals/attack.webp";
import defend from "../assets/hanzi-rivals/defend.webp";
import send from "../assets/hanzi-rivals/send.webp";
import sprint from "../assets/hanzi-rivals/sprint.webp";
import climb from "../assets/hanzi-rivals/climb.webp";
import dictionary from "../assets/hanzi-rivals/dictionary.webp";
import list from "../assets/hanzi-rivals/list.webp";
import deck from "../assets/hanzi-rivals/deck.webp";
import pick from "../assets/hanzi-rivals/pick.webp";
import bubbleDuel from "../assets/hanzi-rivals/bubble-duel.png";
import bubbleClimb from "../assets/hanzi-rivals/bubble-climb.png";

export type Shot = { src: ImageMetadata; alt: string; caption?: string };

/** Hanzi Rivals screenshots (iPhone, 390 × 844 points). */
export const SHOTS = {
  attack: {
    src: attack,
    alt: "A duel in progress: Leo's scholar fighter against Ana's fox at 73 and 74 HP, with Light Attack, Heavy Attack, Dragon Strike and Wild Strike to choose from.",
    caption: "Pick an attack",
  },
  send: {
    src: send,
    alt: "Leo charged a 30-power Dragon Strike by writing 机场 (jīchǎng, airport), with buttons to send the turn to Ana by text or link.",
    caption: "Charge it, send it",
  },
  defend: {
    src: defend,
    alt: "Ana's side of the duel: 'Leo used Dragon Strike! 30 power incoming', with the blocking rules and a Defend button.",
    caption: "Your friend defends",
  },
  sprint: {
    src: sprint,
    alt: "Character Sprint: the word 'weather' with two empty character slots above a grid of nine look-alike characters, a 54-second timer and a score of 2,300.",
    caption: "Character Sprint",
  },
  climb: {
    src: climb,
    alt: "Character Climb at step 7 of 20 with three hearts left, beside a ladder showing where four players reached.",
    caption: "Character Climb",
  },
  dictionary: {
    src: dictionary,
    alt: "The dictionary searching 'friend': 朋友 péngyou, 友 yǒu, 友人 yǒurén and more, tagged with HSK levels and slang.",
    caption: "Dictionary",
  },
  list: {
    src: list,
    alt: "A pasted word list checked against the dictionary: 参加 cānjiā, 希望 xīwàng, 运动 yùndòng and others, each with an editable meaning.",
    caption: "Paste your list",
  },
  deck: {
    src: deck,
    alt: "The page for the list 'Lesson 12 · Travel' with flashcards and practice settings for skill, length and writing difficulty.",
    caption: "Practice a list",
  },
  pick: {
    src: pick,
    alt: "Starting a new duel: choose a friend or the computer, then a ready-made HSK list or your own words.",
    caption: "Start a duel",
  },
  bubbleDuel: {
    src: bubbleDuel,
    alt: "A Hanzi Rivals message bubble from iMessage: Leo at 73 HP versus Ana at 74 HP for the list Lesson 12 · Travel.",
  },
  bubbleClimb: {
    src: bubbleClimb,
    alt: "A Character Climb bubble from an iMessage group chat: Sam reached step 17 of 20, Ana 14 and Mei 9.",
  },
} satisfies Record<string, Shot>;
